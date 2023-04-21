"use client";
import Button2 from "@/components/common/buttons/Button2";
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
						src="https://placehold.co/1920x1080.webp"
						width={1200}
						height={600}
						alt="test"
					/>
					<div className="p-5">
						<Button2 onClick={() => setIsExiting(true)}>
							Back to product (*router.back)
						</Button2>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div
			ref={ref}
			className="fixed top-0 right-0 bottom-0 left-0 bg-standard-dark-100 grid place-content-center z-10 transition-all opacity-100"
		>
			<div className="bg-standard-light">
				<Image
					src="https://placehold.co/1920x1080.webp"
					width={1200}
					height={600}
					alt="test"
				/>
				<div className="p-5">
					<Button2 onClick={() => setIsExiting(true)}>
						Back to product (*router.push)
					</Button2>
				</div>
			</div>
		</div>
	);
};

export default ProductImage;
