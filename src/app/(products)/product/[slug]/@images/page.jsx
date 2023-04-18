import ProductImages from "@/components/pages/product/product-images/ProductImages";

export default function Page({ params }) {
	const { id } = params;
	return <ProductImages />;
}
