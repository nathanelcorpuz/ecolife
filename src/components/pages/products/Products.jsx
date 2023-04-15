"use client";

import AllProducts from "./all-products/AllProducts";
import BestSellers from "./best-sellers/BestSellers";
import ShopByCategory from "./shop-by-category/ShopByCategory";

const Products = () => {
	return (
		<section className="flex flex-col">
			<ShopByCategory />
			<AllProducts />
			<BestSellers />
		</section>
	);
};

export default Products;
