import Article from "@/lib/server/models/Article";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ success: false });
	}
	try {
		await connectMongo();
		const { skip = 0 } = req.query;

		const products = await Article.find({ type: "popular" })
			.sort({ dateCreated: -1 })
			.skip(parseInt(skip))
			.limit(3);

		res.status(200).json({ success: true, products });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false });
	}
}
