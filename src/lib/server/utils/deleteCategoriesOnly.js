import Category from "../models/Category";
import Product from "../models/Product";
import SubCategory from "../models/SubCategory";

export default async function (ids, categories) {
	const categoryIds = categories.map((category) => category._id);
	const categoriesSubCategoryIds = categories.flatMap(
		(category) => category.subCategoryIds
	);

	// delete categories
	await Category.updateMany({ _id: { $in: ids } }, { isDeleted: true });
	// delete sub categories
	await SubCategory.updateMany(
		{ categoryId: { $in: categoryIds } },
		{ isDeleted: true }
	);
	// Pull category ids and subcategory ids of all products in the category and subcategories
	await Product.updateMany(
		{
			$or: [
				{ categoryIds: { $in: categoryIds } },
				{ subCategoryIds: { $in: categoriesSubCategoryIds } },
			],
		},
		{
			$pull: {
				categoryIds: { $in: categoryIds },
				subCategoryIds: { $in: categoriesSubCategoryIds },
			},
		}
	);
}
