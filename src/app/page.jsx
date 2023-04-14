import Checkbox from "@/components/common/inputs/Checkbox";
import Dropdown from "@/components/common/inputs/Dropdown/Dropdown";
import SampleComponentWithDropdown from "@/components/pages/home/SampleComponentWithDropdown";
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
			<section className="container max-w-7xl flex flex-col gap-80 items-start">
				<SampleComponentWithDropdown />
				<h1 className="text-accent-light-300">This is home</h1>
				<Checkbox />
				{/* <ProductCard />
				<BlogCard />
				<Button size="md">Button</Button>
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
				</section> */}
			</section>
			{/* <HeroLayout4 />
			<HeroLayout3 /> */}
		</div>
	);
}
