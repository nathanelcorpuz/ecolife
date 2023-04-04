import createOption from "@/lib/server/helpers/admin/products/options/createOption";
import deleteOptions from "@/lib/server/helpers/admin/products/options/deleteOptions";
import editOption from "@/lib/server/helpers/admin/products/options/editOption";
import getOptions from "@/lib/server/helpers/admin/products/options/getOptions";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	try {
		await connectMongo();
		if (req.method === "POST") {
			await createOption(req, res);
			return;
		}
		if (req.method === "GET") {
			await getOptions(req, res);
			return;
		}
		if (req.method === "PUT") {
			await editOption(req, res);
			return;
		}
		if (req.method === "DELETE") {
			await deleteOptions(req, res);
			return;
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
}
