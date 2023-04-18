import ProductImage from "@/components/pages/product/product-images/ProductImage";

export default function PhotoPage({ params }) {
	return (
		<div>
			<p>Without modal</p>
			<ProductImage isModal={false} id={params.id} />
		</div>
	);
}
