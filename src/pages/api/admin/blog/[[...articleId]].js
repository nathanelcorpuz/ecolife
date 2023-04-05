import Article from "@/lib/server/models/Article";
import connectMongo from "@/lib/server/services/connectMongo";
import slugify from "slugify";

export default async function handler(req, res) {
	try {
		await connectMongo();
		if (req.method === "POST") {
			const slug = slugify(req.body.heading.title, { lower: true });
			const article = await Article.create({ slug, ...req.body });
			res.status(200).json(article);
			return;
		}
		if (req.method === "GET") {
			const articles = await Article.find({ isDeleted: false });
			res.status(200).json(articles);
			return;
		}
		if (req.method === "PUT") {
			const slug = slugify(req.body.heading.title, { lower: true });
			const article = await Article.findByIdAndUpdate(req.query.articleId, {
				slug,
				...req.body,
			});
			res.status(200).json(article);
			return;
		}
		if (req.method === "DELETE") {
			await Article.findByIdAndUpdate(req.query.articleId, { isDeleted: true });
			res.status(200).json("Article deleted");
			return;
		}
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
