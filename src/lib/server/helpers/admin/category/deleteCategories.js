import Category from "@/lib/server/models/Category";
import SubCategory from "@/lib/server/models/SubCategory";
import deleteOnlyCategories from "@/lib/server/utils/deleteOnlyCategories";
import deleteOnlySubCategories from "@/lib/server/utils/deleteOnlySubCategories";

export default async function (req, res) {
	try {
		const { categoryIds } = req.query;

		const categories = await Category.find({ _id: { $in: categoryIds } });
		const subCategories = await SubCategory.find({ _id: { $in: categoryIds } });

		const subCategoryIdsToDelete = subCategories.map(
			(category) => category._id
		);

		if (categories.length > 0) {
			await deleteOnlyCategories({ categories, subCategoryIdsToDelete });
		}

		if (subCategories.length > 0) {
			await deleteOnlySubCategories({ subCategories });
		}

		res.status(200).json({
			success: true,
			message: "Categories deleted successfully",
		});
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
}
