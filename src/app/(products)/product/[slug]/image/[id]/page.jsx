import ProductImage from "@/components/pages/product/product-images/ProductImage";

export default function PhotoPage({ params }) {
	return <ProductImage isModal={false} id={params.id} />;
}
