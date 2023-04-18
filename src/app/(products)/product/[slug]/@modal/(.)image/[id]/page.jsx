import ProductImage from "@/components/pages/product/product-images/ProductImage";

export default function PhotoModal({ params }) {
	return (
		<div>
			<p>With modal</p>
			<ProductImage isModal id={params.id} />
		</div>
	);
}
