import deleteProducts from "@/lib/server/helpers/admin/products/deleteProducts";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	try {
		await connectMongo();
		if (req.method === "DELETE") {
			await deleteProducts(req, res);
			return;
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
}
