import CustomButton from "@/components/common/buttons/CustomButton";
import BlogCard from "@/components/common/cards/BlogCard";
import ProductCard from "@/components/common/cards/ProductCard";
import HeroLayout3 from "@/components/common/hero-layouts/HeroLayout3";
import Product from "@/lib/server/models/Product";
import connectMongo from "@/lib/server/services/connectMongo";

async function getProducts() {
	await connectMongo();
	return Product.find({ type: "featured" });
}

export default async function () {
	const featuredProducts = await getProducts();

	console.log("featuredProducts");
	console.log(featuredProducts);
	return (
		<div className="overflow-hidden">
			<HeroLayout3 />
			<section className="container max-w-7xl">
				<h1 className="text-accent-light-300">This is home</h1>
				<ProductCard />
				<BlogCard />
				<CustomButton size="md">Button</CustomButton>
				<section>
					<h2>This is a section</h2>
					<p>With some paragraph on it</p>
				</section>
				<section>
					<h2>This is a section</h2>
					<p>With some paragraph on it</p>
				</section>
				<section>
					<h2>This is a section</h2>
					<p>With some paragraph on it</p>
				</section>
			</section>
		</div>
	);
}
