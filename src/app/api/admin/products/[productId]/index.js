import editProduct from "@/lib/server/helpers/admin/products/editProduct";
import Product from "@/lib/server/models/Product";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAdminAccessToken from "@/lib/server/services/verifyAdminAccessToken";

export default async function handler(req, res) {
	try {
		const verification = verifyAdminAccessToken(req);

		if (!verification.isSuccess) throw new Error(verification.message);

		await connectMongo();
		if (req.method === "GET") {
			const product = await Product.findById(req.query.productId);
			res.status(200).json(product);
			return;
		}
		if (req.method === "PUT") {
			await editProduct(req, res);
			return;
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
}
