import deleteOptions from "@/lib/server/helpers/admin/products/options/deleteOptions";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	try {
		await connectMongo();
		if (req.method === "DELETE") {
			await deleteOptions(req, res);
			return;
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
}
