import Article from "@/lib/server/models/Article";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ success: false });
	}

	try {
		await connectMongo();
		const { slug } = req.query;
		const article = await Article.findOne({ slug });

		res.status(200).json({ success: true, article });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false });
	}
}
