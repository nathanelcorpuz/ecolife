import Checkbox from "@/components/common/inputs/Checkbox";
import SearchInput from "@/components/common/inputs/search-input/SearchInput";
import BlogInvite from "@/components/common/sections/BlogInvite";
import ClientComponentWithDropdown from "@/components/pages/home/ClientComponentWithDropdown";
import ClientComponentWithInput from "@/components/pages/home/ClientComponentWithInput";
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
			</section>
		</div>
	);
}
