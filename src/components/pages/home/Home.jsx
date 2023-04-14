"use client";

import Hero from "./hero/Hero";
import Stats from "./stats/Stats";

const Home = () => {
	return (
		<main className="overflow-hidden">
			<Hero />
			<Stats />
		</main>
	);
};

export default Home;
