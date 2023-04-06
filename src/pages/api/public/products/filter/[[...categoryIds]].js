import Product from "@/lib/server/models/Product";
import connectMongo from "@/lib/server/services/connectMongo";
import { isValidObjectId } from "mongoose";

const PAGE_SIZE = 4;
export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ success: false });
	}

	try {
		await connectMongo();
		const { categoryIds } = req.query;
		const { page = 1 } = req.query;
		let query = {};
		if (categoryIds && Array.isArray(categoryIds) && categoryIds.length > 0) {
			const validCategoryIds = categoryIds.filter(isValidObjectId);
			query = {
				$or: [
					{ categoryIds: { $in: validCategoryIds } },
					{ subCategoryIds: { $in: validCategoryIds } },
				],
			};
		}
		const count = await Product.countDocuments(query);
		const totalPages = Math.ceil(count / PAGE_SIZE);
		const products = await Product.find(query)
			.skip((page - 1) * PAGE_SIZE)
			.limit(PAGE_SIZE);
		res.json({ totalPages, products });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false });
	}
}
