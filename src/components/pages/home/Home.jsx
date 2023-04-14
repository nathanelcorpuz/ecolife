"use client";

import FeaturedProducts from "./featured-products/FeaturedProducts";
import Hero from "./hero/Hero";
import OurMission from "./our-mission/OurMission";
import SpecialOffers from "./special-offers/SpecialOffers";
import Stats from "./stats/Stats";

const Home = () => {
	return (
		<main className="overflow-hidden">
			<Hero />
			<Stats />
			<FeaturedProducts />
			<SpecialOffers />
			<OurMission />
		</main>
	);
};

export default Home;
