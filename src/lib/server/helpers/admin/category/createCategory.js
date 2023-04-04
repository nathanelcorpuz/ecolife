import Category from "@/lib/server/models/Category";
import Product from "@/lib/server/models/Product";
import SubCategory from "@/lib/server/models/SubCategory";

export default async function (req, res) {
	try {
		const { isSubCategory, categoryId, data } = req.body;

		if (isSubCategory) {
			const category = await Category.findById(categoryId);

			const newSubCategory = new SubCategory({ ...data, categoryId });

			await newSubCategory.save();

			await category.updateOne({
				$push: { subcategoryIds: newSubCategory._id },
			});

			await Promise.all(
				data.productIds.map(async (productId) => {
					await Product.findByIdAndUpdate(productId, {
						$push: { subCategoryIds: newSubCategory._id },
					});
				})
			);

			res.status(200).json({ success: true });
			return;
		}

		const newCategory = new Category(data);

		newCategory.productIds = data.productIds;

		await newCategory.save();

		await Promise.all(
			data.productIds.map(async (productId) => {
				await Product.findByIdAndUpdate(productId, {
					$push: { categoryIds: newCategory._id },
				});
			})
		);

		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
}
