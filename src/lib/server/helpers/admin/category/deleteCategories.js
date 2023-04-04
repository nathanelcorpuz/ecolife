import Category from "@/lib/server/models/Category";
import Product from "@/lib/server/models/Product";
import SubCategory from "@/lib/server/models/SubCategory";

export default async function (req, res) {
	try {
		// receive category ids for both category and subcategory
		const { categoryIds } = req.query;

		const categories = await Category.find({ _id: { $in: categoryIds } });
		const subCategories = await SubCategory.find({ _id: { $in: categoryIds } });

		if (categories.length) {
			// set isDeleted to true for category docs
			await Category.updateMany(
				{ _id: { $in: categoryIds } },
				{ isDeleted: true }
			);

			// pull categoryId from each product doc based on category docs' product ids
			await Promise.all(
				categories.map(async (category) => {
					await Product.updateMany(
						{ _id: { $in: category.productIds } },
						{ $pull: { categoryIds: category._id } }
					);

					// set subcategory docs to isDeleted based on subcategoryIds of categories
					await SubCategory.updateMany(
						{ _id: { $in: category.subcategoryIds } },
						{ isDeleted: true }
					);

					// get subcategory docs of category based on subcategoryIds
					const subCategories = await SubCategory.find({
						_id: { $in: category.subcategoryIds },
					});

					// pull subcategoryId from product docs based on subcategory docs' productIds
					await Promise.all(
						subCategories.map(async (subCategory) => {
							await Product.updateMany(
								{ _id: { $in: subCategory.productIds } },
								{ $pull: { subCategoryIds: subCategory._id } }
							);
						})
					);
				})
			);
		}

		if (subCategories.length) {
			// set isDeleted to true for subcategory docs
			await SubCategory.updateMany(
				{ _id: { $in: categoryIds } },
				{ isDeleted: true }
			);

			// pull subcategoryId from each product doc
			await Promise.all(
				subCategories.map(async (subCategory) => {
					await Product.updateMany(
						{ _id: { $in: subCategory.productIds } },
						{ $pull: { subCategoryIds: subCategory._id } }
					);
				})
			);

			// pull subcategoryId from parent category doc
			const subCategoryIds = subCategories.map(
				(subCategory) => subCategory._id
			);
			await Category.updateMany(
				{ subcategoryIds: { $in: subCategoryIds } },
				{ $pull: { subcategoryIds: { $in: subCategoryIds } } }
			);
		}

		res.status(200).json({
			success: true,
			message: "Categories deleted successfully",
		});
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
}
