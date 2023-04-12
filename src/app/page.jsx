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
	return <h1 className="font-bold underline">Hello, this is home.</h1>;
}
