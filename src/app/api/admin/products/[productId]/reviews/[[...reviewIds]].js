import createReview from "@/lib/server/helpers/admin/products/reviews/createReview";
import deleteReviews from "@/lib/server/helpers/admin/products/reviews/deleteReviews";
import editReview from "@/lib/server/helpers/admin/products/reviews/editReview";
import getReviews from "@/lib/server/helpers/admin/products/reviews/getReviews";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAdminAccessToken from "@/lib/server/services/verifyAdminAccessToken";

export default async function handler(req, res) {
	try {
		const verification = verifyAdminAccessToken(req);

		if (!verification.isSuccess) throw new Error(verification.message);

		await connectMongo();
		if (req.method === "POST") {
			await createReview(req, res);
			return;
		}
		if (req.method === "GET") {
			await getReviews(req, res);
			return;
		}
		if (req.method === "PUT") {
			await editReview(req, res);
			return;
		}
		if (req.method === "DELETE") {
			await deleteReviews(req, res);
			return;
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
}
