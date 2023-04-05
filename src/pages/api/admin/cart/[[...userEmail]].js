import addProducts from "@/lib/server/helpers/admin/cart/addProducts";
import getCart from "@/lib/server/helpers/admin/cart/getCart";
import updateQuantity from "@/lib/server/helpers/admin/cart/updateQuantity";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	try {
		await connectMongo();
		if (req.method === "POST") {
			await addProducts(req, res);
			return;
		}
		if (req.method === "GET") {
			await getCart(req, res);
			return;
		}
		if (req.method === "PUT") {
			await updateQuantity(req, res);
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
