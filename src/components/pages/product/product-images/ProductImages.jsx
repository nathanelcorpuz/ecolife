"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ProductImages = ({ data }) => {
	const params = useParams();
	return (
		<section>
			<div>Image preview</div>
			<div>Clickable Thumbnails</div>
			<Link href={`product/${params.slug}/sample`}>To image</Link>
		</section>
	);
};

export default ProductImages;
