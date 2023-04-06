import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ success: false });
	}
	try {
		await connectMongo();
		const { categoryIds } = req.query;
		res.json(categoryIds);
	} catch (error) {
		return res.status(500).json({ success: false });
	}
}
