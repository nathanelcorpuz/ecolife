"use client";

import Button from "@/components/common/buttons/Button";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ProductImage = ({ isModal, id }) => {
	const ref = useRef();
	const [isExiting, setIsExiting] = useState(false);
	const params = useParams();
	const router = useRouter();

	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const handleExit = async (isModal) => {
		if (isModal) {
			ref.current.classList.remove("opacity-100");
			ref.current.classList.add("opacity-0");
		}
		await sleep(200);
		if (isModal) {
			router.back();
		} else {
			router.push(`/product/${params.slug}`);
		}
	};

	useEffect(() => {
		if (isModal) {
			setTimeout(() => {
				ref.current.classList.add("opacity-100");
				ref.current.classList.remove("opacity-0");
			}, 100);
		}
	}, []);

	useEffect(() => {
		if (isExiting) {
			handleExit(isModal);
		}
	}, [isExiting]);

	if (isModal) {
		return (
			<div
				ref={ref}
				className="fixed top-0 right-0 bottom-0 left-0 bg-standard-dark-100 grid place-content-center z-10 transition-all opacity-0"
			>
				<div className="bg-standard-light">
					<Image
						src="https://placehold.co/600x400.webp"
						width={600}
						height={400}
						alt="test"
					/>
					<Button onClick={() => setIsExiting(true)}>
						Return to product (router.back)
					</Button>
				</div>
			</div>
		);
	}
	return (
		<div
			ref={ref}
			className="fixed top-0 right-0 bottom-0 left-0 bg-standard-dark-100 grid place-content-center z-10 transition-all opacity-50"
		>
			<div className="bg-standard-light">
				<Image
					src="https://placehold.co/600x400.webp"
					width={600}
					height={400}
					alt="test"
				/>
				<Button onClick={() => setIsExiting(true)}>
					Return to product (router.push)
				</Button>
			</div>
		</div>
	);
};

export default ProductImage;
