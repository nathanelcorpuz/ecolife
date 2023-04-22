import Home from "@/components/pages/home/Home";
import Product from "@/lib/server/models/Product";
import connectMongo from "@/lib/server/services/connectMongo";

async function getProducts() {
	await connectMongo();
	return Product.find({ type: "featured" });
}

export default async function () {
	const featuredProducts = await getProducts();

	return <Home />;
}
