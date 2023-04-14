"use client";

import FeaturedProducts from "./featured-products/FeaturedProducts";
import Hero from "./hero/Hero";
import Stats from "./stats/Stats";

const Home = () => {
	return (
		<main className="overflow-hidden">
			<Hero />
			<Stats />
			<FeaturedProducts />
		</main>
	);
};

export default Home;
