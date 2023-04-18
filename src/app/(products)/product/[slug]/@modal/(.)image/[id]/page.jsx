import ProductImage from "@/components/pages/product/product-images/ProductImage";

export default function PhotoModal({ params }) {
	return (
		<div>
			{/* WIP: modal functionality based on https://github.com/vercel-labs/nextgram/blob/main/components/modal/index.js */}
			<p>With modal</p>
			<ProductImage isModal id={params.id} />
		</div>
	);
}
