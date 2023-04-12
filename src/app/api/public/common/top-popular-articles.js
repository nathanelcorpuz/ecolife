import Article from "@/lib/server/models/Article";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ success: false });
	}

	try {
		await connectMongo();
		const popularArticles = await Article.find({ type: "popular" }).limit(3);
		return res.status(200).json({ success: true, popularArticles });
	} catch (error) {
		return res.status(500).json({ success: false });
	}
}
