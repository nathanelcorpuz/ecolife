import deleteCartProducts from "@/lib/server/helpers/admin/cart/deleteCartProducts";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAdminAccessToken from "@/lib/server/services/verifyAdminAccessToken";

export default async function (req, res) {
	try {
		const verification = verifyAdminAccessToken(req);

		if (!verification.isSuccess) throw new Error(verification.message);

		await connectMongo();
		if (req.method === "DELETE") {
			await deleteCartProducts(req, res);
			return;
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
