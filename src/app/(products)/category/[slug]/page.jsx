import Category from "@/components/pages/category/Category";

export default function Page({ params }) {
	// sample call api based on slug
	let title =
		params.slug === "kitchen"
			? "Kitchen"
			: params.slug === "personal-care"
			? "Personal Care"
			: "Fashion";
	const data = {
		title,
		products: [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
			{ id: 4 },
			{ id: 5 },
			{ id: 6 },
			{ id: 7 },
			{ id: 8 },
			{ id: 9 },
		],
	};

	return <Category {...data} />;
}
