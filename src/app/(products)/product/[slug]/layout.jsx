import ProductImages from "@/components/pages/product/product-images/ProductImages";

export default function layout({ children, images }) {
	return (
		<main>
			{/* requirements:
                - pre-render solo image previews using parallel routes
                - layout.js should contain nav for each image
            */}

			{/* image thumbnails */}
			{images}
			{children}
		</main>
	);
}
