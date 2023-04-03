import createUser from "@/lib/server/helpers/admin/user/createUser";
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
		res.status(200).json({ query: req.query, body: req.body });
		return;
	}
	if (req.method === "DELETE") {
		res.status(200).json({ query: req.query });
		return;
	}
	res.status(200).json({ success: true });
}
