import CustomButton from "@/components/common/buttons/CustomButton";
import BlogCard from "@/components/common/cards/BlogCard";
import ProductCard from "@/components/common/cards/ProductCard";
import HeroLayout3 from "@/components/common/hero-layouts/HeroLayout3";
import HeroLayout4 from "@/components/common/hero-layouts/HeroLayout4";
import CustomCheckbox from "@/components/common/inputs/CustomCheckbox";
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
			<section className="container max-w-7xl flex flex-col gap-10 items-start">
				<h1 className="text-accent-light-300">This is home</h1>
				<CustomCheckbox />
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
			<HeroLayout4 />
			<HeroLayout3 />
		</div>
	);
}
