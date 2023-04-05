import addProducts from "@/lib/server/helpers/admin/cart/addProducts";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	try {
		await connectMongo();
		if (req.method === "POST") {
			await addProducts(req, res);
			return;
		}
		if (req.method === "GET") {
			res.status(200).json({ query: req.query });
			return;
		}
		if (req.method === "PUT") {
			res.status(200).json({ query: req.query, body: req.body });
			return;
		}
		if (req.method === "DELETE") {
			res.status(200).json({ query: req.query });
			return;
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
