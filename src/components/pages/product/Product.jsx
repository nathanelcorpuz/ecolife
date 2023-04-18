"use client";

import ProductDetails from "./product-details/ProductDetails";
import ProductImages from "./product-images/ProductImages";

const Product = ({ data }) => {
	return (
		<section>
			<ProductImages imageIds={data.imageIds} />
			<ProductDetails data={data} />
		</section>
	);
};

export default Product;
