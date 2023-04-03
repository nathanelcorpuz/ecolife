import createProduct from "@/lib/server/helpers/admin/products/createProduct";
import deleteProduct from "@/lib/server/helpers/admin/products/deleteProduct";
import editProduct from "@/lib/server/helpers/admin/products/editProduct";
import getProducts from "@/lib/server/helpers/admin/products/getProducts";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	try {
		await connectMongo();

		if (req.method === "POST") {
			await createProduct(req, res);
			return;
		}
		if (req.method === "GET") {
			await getProducts(req, res);
			return;
		}
		if (req.method === "PUT") {
			await editProduct(req, res);
			return;
		}
		if (req.method === "DELETE") {
			await deleteProduct(req, res);
			return;
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
}
