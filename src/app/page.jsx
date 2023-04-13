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
		<div>
			<h1 className="text-accent-light-300">This is home</h1>
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
		</div>
	);
}
