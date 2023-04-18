"use client";

import ProductDetails from "./product-details/ProductDetails";
import ProductImages from "./product-images/ProductImages";

const Product = ({ data }) => {
	return (
		<section className="py-20 ">
			<div className="m-w-5xl flex justify-center">
				<ProductImages images={data.images} />
				<ProductDetails data={data} />
			</div>
		</section>
	);
};

export default Product;
