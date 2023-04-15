"use server";

import Products from "@/components/pages/products/Products";

export default async function Page() {
	/*
		to be fetched:
		- categories (for shop by category)
		- categories + sub categories (for filter controls)
		- all products (for product tiles)
		- best sellers
	*/
	return <Products />;
}
