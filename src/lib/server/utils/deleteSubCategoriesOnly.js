import Category from "../models/Category";
import Product from "../models/Product";
import SubCategory from "../models/SubCategory";

export default async function (subCategories) {
	const subCategoryIds = subCategories.map((subCategory) => subCategory._id);

	// delete sub categories
	await SubCategory.updateMany(
		{ _id: { $in: subCategoryIds } },
		{ isDeleted: true }
	);
	// pull sub category ids from categories
	await Category.updateMany(
		{ subCategoryIds: { $in: subCategoryIds } },
		{ $pull: { subCategoryIds: { $in: subCategoryIds } } }
	);
	// pull sub category ids from products
	await Product.updateMany(
		{ subCategoryIds: { $in: subCategoryIds } },
		{
			$pull: { subCategoryIds: { $in: subCategoryIds } },
		}
	);
}
