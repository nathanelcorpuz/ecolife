"use client";

import Button from "@/components/common/buttons/Button";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const ProductImage = ({ isModal, id }) => {
	const params = useParams();
	const router = useRouter();
	return (
		<div>
			<h1>Product Image: {id}</h1>
			<br />
			{isModal ? (
				<Button onClick={() => router.back()}>
					Return to product (router.back)
				</Button>
			) : (
				<Link href={`/product/${params.slug}`}>Return to product (Link)</Link>
			)}
		</div>
	);
};

export default ProductImage;
