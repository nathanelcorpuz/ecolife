import createCategory from "@/lib/server/helpers/admin/category/createCategory";
import deleteCategories from "@/lib/server/helpers/admin/category/deleteCategories";
import getCategories from "@/lib/server/helpers/admin/category/getCategories";
import updateCategory from "@/lib/server/helpers/admin/category/updateCategory";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	try {
		await connectMongo();
		if (req.method === "POST") {
			await createCategory(req, res);
			return;
		}
		if (req.method === "GET") {
			await getCategories(req, res);
			return;
		}
		if (req.method === "PUT") {
			await updateCategory(req, res);
			return;
		}
		if (req.method === "DELETE") {
			await deleteCategories(req, res);
			return;
		}
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
}
