import Category from "@/lib/server/models/Category";
import SubCategory from "@/lib/server/models/SubCategory";
import deleteCategoriesOnly from "@/lib/server/utils/deleteCategoriesOnly";
import deleteSubCategoriesOnly from "@/lib/server/utils/deleteSubCategoriesOnly";

export default async function (req, res) {
	try {
		// receive ids for both category and subcategory
		const { categoryIds: ids } = req.query;

		const categories = await Category.find({ _id: { $in: ids } });
		await deleteCategoriesOnly(ids, categories);

		// for sub categories
		const subCategories = await SubCategory.find({ _id: { $in: ids } });
		await deleteSubCategoriesOnly(subCategories);

		res.status(200).json({
			success: true,
			message: "Categories deleted successfully",
		});
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
}
