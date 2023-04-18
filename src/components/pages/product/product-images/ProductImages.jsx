"use client";

import Button from "@/components/common/buttons/Button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductImages = ({ images }) => {
	const params = useParams();
	const [activeId, setActiveId] = useState(images[0].uuid);
	// on thumbnail click, update preview image
	// on preview image click, open image in modal
	return (
		<section>
			<h1>
				<Link
					className="underline"
					href={`/product/${params.slug}/image/${activeId}`}
				>
					Image preview: {activeId}
				</Link>
			</h1>
			<div>
				{images.map(({ uuid, url }) => (
					<Button key={uuid} onClick={() => setActiveId(uuid)}>
						{/* fetch image via id from uploadcare */}
						Image: {uuid}
					</Button>
				))}
			</div>
		</section>
	);
};

export default ProductImages;
