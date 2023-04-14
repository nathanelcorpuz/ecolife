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
			<section className="container max-w-7xl flex flex-col gap-80 items-start"></section>
		</div>
	);
}
