import createUser from "@/lib/server/helpers/admin/user/createUser";
import editUser from "@/lib/server/helpers/admin/user/editUser";
import getUsers from "@/lib/server/helpers/admin/user/getUsers";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
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
		res.status(200).json({ query: req.query });
		return;
	}
	res.status(200).json({ success: true });
}
