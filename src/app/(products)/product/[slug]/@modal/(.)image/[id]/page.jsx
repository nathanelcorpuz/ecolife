import ProductImage from "@/components/pages/product/product-images/ProductImage";

export default function PhotoModal({ params }) {
	return <ProductImage isModal id={params.id} />;
}
