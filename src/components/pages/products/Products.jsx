"use client";

import AllProducts from "./all-products/AllProducts";
import BestSellers from "./best-sellers/BestSellers";
import ShopByCategory from "./shop-by-category/ShopByCategory";

const Products = () => {
	return (
		<main className="flex flex-col">
			<ShopByCategory />
			<AllProducts />
			<BestSellers />
		</main>
	);
};

export default Products;
