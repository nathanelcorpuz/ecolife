import deleteCartProducts from "@/lib/server/helpers/admin/cart/deleteCartProducts";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function (req, res) {
	try {
		await connectMongo();
		if (req.method === "DELETE") {
			await deleteCartProducts(req, res);
			return;
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
