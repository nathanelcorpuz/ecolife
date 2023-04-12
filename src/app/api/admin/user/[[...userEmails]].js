import createUser from "@/lib/server/helpers/admin/user/createUser";
import deleteUsers from "@/lib/server/helpers/admin/user/deleteUsers";
import editUser from "@/lib/server/helpers/admin/user/editUser";
import getUsers from "@/lib/server/helpers/admin/user/getUsers";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAdminAccessToken from "@/lib/server/services/verifyAdminAccessToken";

export default async function handler(req, res) {
	try {
		const verification = verifyAdminAccessToken(req);

		if (!verification.isSuccess) throw new Error(verification.message);

		await connectMongo();
		if (req.method === "POST") {
			await createUser(req, res);
			return;
		}
		if (req.method === "GET") {
			await getUsers(req, res);
			return;
		}
		if (req.method === "PUT") {
			await editUser(req, res);
			return;
		}
		if (req.method === "DELETE") {
			await deleteUsers(req, res);
			return;
		}
	} catch (error) {
		res.status(400).json(error);
	}
}
