import ProductImage from "@/components/pages/product/product-images/ProductImage";

export default function Page({ params }) {
	const { id } = params;
	return <ProductImage />;
}
