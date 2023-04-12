import deleteProducts from "@/lib/server/helpers/admin/products/deleteProducts";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAdminAccessToken from "@/lib/server/services/verifyAdminAccessToken";

export default async function handler(req, res) {
	try {
		const verification = verifyAdminAccessToken(req);

		if (!verification.isSuccess) throw new Error(verification.message);

		await connectMongo();
		if (req.method === "DELETE") {
			await deleteProducts(req, res);
			return;
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
}
