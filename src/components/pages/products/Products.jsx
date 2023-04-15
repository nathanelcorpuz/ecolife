"use client";

import AllProducts from "./all-products/AllProducts";
import ShopByCategory from "./shop-by-category/ShopByCategory";

const Products = () => {
	return (
		<section className="flex flex-col">
			<ShopByCategory />
			<AllProducts />
		</section>
	);
};

export default Products;
