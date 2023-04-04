import Category from "@/lib/server/models/Category";
import Product from "@/lib/server/models/Product";
import SubCategory from "@/lib/server/models/SubCategory";

export default async function (req, res) {
	try {
		const { categoryIds } = req.query;
		const { isSubCategory, newData } = req.body;

		const categoryType = isSubCategory ? SubCategory : Category;
		const category = await categoryType.findById(categoryIds[0]);

		const currentProductIds = category.productIds;
		const newProductIds = newData.productIds;
		const productIdsToRemove = currentProductIds.filter(
			(id) => !newProductIds.includes(id)
		);

		await Promise.all(
			productIdsToRemove.map(async (productId) => {
				await Product.findByIdAndUpdate(productId, {
					$pull: {
						[isSubCategory ? "subCategoryIds" : "categoryIds"]: category._id,
					},
				});
			})
		);

		await Promise.all(
			newProductIds.map(async (productId) => {
				await Product.findByIdAndUpdate(productId, {
					$push: {
						[isSubCategory ? "subCategoryIds" : "categoryIds"]: category._id,
					},
				});
			})
		);

		await category.updateOne(newData);
		res.status(200).json({
			success: true,
			message: `${isSubCategory ? "SubCategory" : "Category"} updated`,
		});
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
}
