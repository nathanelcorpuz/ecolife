import Article from "@/lib/server/models/Article";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		res.status(400).json({ message: "Invalid request method" });
		return;
	}

	try {
		await connectMongo();
		const { keywords } = req.query;

		if (!keywords) {
			res.status(400).json({ message: "Invalid query parameter" });
			return;
		}

		const articles = await Article.find({
			"heading.title": { $regex: keywords, $options: "i" },
		});

		res.status(200).json({ articles });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}