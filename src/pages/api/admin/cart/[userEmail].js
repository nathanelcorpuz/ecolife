import addCartProducts from "@/lib/server/helpers/admin/cart/addCartProducts";
import getCart from "@/lib/server/helpers/admin/cart/getCart";
import updateQuantity from "@/lib/server/helpers/admin/cart/updateQuantity";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	try {
		await connectMongo();
		if (req.method === "POST") {
			await addCartProducts(req, res);
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
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
