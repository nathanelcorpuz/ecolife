"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import productImg1 from "../../../../../public/assets/products/product-1.jpg";
import productImg2 from "../../../../../public/assets/products/product-2.jpg";
import Image from "next/image";

const ProductImages = ({ images }) => {
	const params = useParams();
	const router = useRouter();
	const [activeId, setActiveId] = useState(images[0].uuid);
	// on thumbnail click, update preview image
	// on preview image click, open image in modal
	return (
		<section className="flex flex-col gap-2">
			<div
				className="w-[700px] h-[500px] relative overflow-hidden cursor-pointer transition-all hover:scale-[1.015]"
				onClick={() => router.push(`/product/${params.slug}/image/${activeId}`)}
			>
				<Image
					alt="test"
					src={productImg1}
					fill
					className="object-cover object-center"
				/>
			</div>
			<div className=" flex gap-2 justify-between">
				{images.map(({ uuid, url }) => (
					<div
						key={uuid}
						onClick={() => setActiveId(uuid)}
						className="w-[100%] h-[150px] relative overflow-hidden cursor-pointer transition-all hover:scale-[1.03]"
					>
						{/* PROD: fetch image via id from uploadcare */}
						{/* DEV: use local image */}
						<Image
							src={productImg2}
							fill
							alt="test"
							className="object-cover object-center"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProductImages;
