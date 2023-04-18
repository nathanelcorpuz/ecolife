"use client";

import Button from "@/components/common/buttons/Button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductImages = ({ imageIds }) => {
	const params = useParams();
	// on thumbnail click, update preview image
	// on preview image click, open image in modal
	return (
		<section>
			<h1>
				<Link
					className="underline"
					href={`/product/${params.slug}/image/${imageIds[0]}`}
				>
					Image preview
				</Link>
			</h1>
			<div>
				{imageIds.map((id) => (
					<Link key={id} href={`/product/${params.slug}/image/${id}`}>
						Image {id}
					</Link>
				))}
			</div>
		</section>
	);
};

export default ProductImages;
