import deleteCartProducts from "@/lib/server/helpers/public/deleteCartProducts";
import Cart from "@/lib/server/models/Cart";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method === "DELETE") {
		try {
			await connectMongo();
			await deleteCartProducts(req, res);
		} catch (error) {
			res.status(500).json({ error: "Internal server error" });
			return;
		}
		return;
	}

	if (req.method !== "GET") {
		res.status(405).json({ error: "Method not allowed" });
		return;
	}

	try {
		await connectMongo();
		const { cartId } = req.query;
		const cart = await Cart.findById(cartId);
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
		return;
	}
}
