import addCartProducts from "@/lib/server/helpers/admin/cart/addCartProducts";
import getCart from "@/lib/server/helpers/admin/cart/getCart";
import updateCartProduct from "@/lib/server/helpers/admin/cart/updateCartProduct";
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
			await updateCartProduct(req, res);
			return;
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
