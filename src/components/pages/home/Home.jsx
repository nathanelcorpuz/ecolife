"use client";

import FeaturedProducts from "./featured-products/FeaturedProducts";
import Hero from "./hero/Hero";
import SpecialOffers from "./special-offers/SpecialOffers";
import Stats from "./stats/Stats";

const Home = () => {
	return (
		<main className="overflow-hidden">
			<Hero />
			<Stats />
			<FeaturedProducts />
			<SpecialOffers />
		</main>
	);
};

export default Home;
