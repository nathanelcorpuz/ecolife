"use client";

import ProductDetails from "./product-details/ProductDetails";
import ProductImages from "./product-images/ProductImages";

const Product = ({ data }) => {
	return (
		<main>
			<ProductImages data={data} />
			<ProductDetails data={data} />
		</main>
	);
};

export default Product;
