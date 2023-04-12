import Article from "@/lib/server/models/Article";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	try {
		await connectMongo();

		const result = await Article.aggregate([
			{
				$group: {
					_id: "$type",
					articles: { $push: "$$ROOT" },
				},
			},
			{
				$project: {
					_id: 0,
					type: "$_id",
					articles: 1,
				},
			},
		]);

		const articles = result.reduce((obj, { type, articles }) => {
			obj[type] = articles;
			return obj;
		}, {});

		res.status(200).json(articles);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}
