"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ProductImages = ({ data }) => {
	const params = useParams();
	return (
		<section>
			<div>
				<Link
					className="underline"
					href={`/product/${params.slug}/image/sampleDataId`}
				>
					Image preview
				</Link>
			</div>
			<div>Clickable Thumbnails</div>
		</section>
	);
};

export default ProductImages;
