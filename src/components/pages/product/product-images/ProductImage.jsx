"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ProductImage = () => {
	const params = useParams();
	return (
		<div>
			<h1>ProductImage</h1>
			<br />
			<Link href={`/product/${params.slug}`}>Return to product</Link>
		</div>
	);
};

export default ProductImage;
