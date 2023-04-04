import Category from "../models/Category";
import Product from "../models/Product";
import SubCategory from "../models/SubCategory";

export default async function ({ subCategories }) {
	const subCategoryIdsToDelete = subCategories.map(
		(subCategory) => subCategory._id
	);

	await SubCategory.updateMany(
		{ _id: { $in: subCategoryIdsToDelete } },
		{ isDeleted: true }
	);

	await Product.updateMany(
		{
			$or: [
				{ subCategoryIds: { $in: subCategoryIdsToDelete } },
				{
					_id: {
						$in: subCategories
							.map((subCategory) => subCategory.productIds)
							.flat(),
					},
				},
			],
		},
		{
			$pullAll: { subCategoryIds: subCategoryIdsToDelete },
		}
	);

	await Category.updateMany(
		{
			_id: {
				$in: subCategories.map((subCategory) => subCategory.categoryId),
			},
		},
		{
			$pullAll: {
				subcategoryIds: subCategoryIdsToDelete,
			},
		}
	);
}
