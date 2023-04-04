import Category from "../models/Category";
import Product from "../models/Product";
import SubCategory from "../models/SubCategory";

export default async function ({
	categories,
	subCategoryIdsToDelete,
}) {
	const categoryIdsToDelete = categories.map((category) => category._id);

	await Category.updateMany(
		{ _id: { $in: categoryIdsToDelete } },
		{ isDeleted: true }
	);

	await Category.updateMany(
		{ subCategoryIds: { $in: subCategoryIdsToDelete } },
		{ $pullAll: { subCategoryIds: subCategoryIdsToDelete } }
	);

	await SubCategory.updateMany(
		{
			categoryId: { $in: categoryIdsToDelete },
		},
		{ isDeleted: true }
	);

	await Product.updateMany(
		{
			$or: [
				{ categoryIds: { $in: categoryIdsToDelete } },
				{
					_id: {
						$in: categories.map((category) => category.productIds).flat(),
					},
				},
			],
		},
		{
			$pullAll: { categoryIds: categoryIdsToDelete },
		}
	);
}
