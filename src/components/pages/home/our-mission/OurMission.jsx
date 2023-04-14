"use client";

import Button from "@/components/common/buttons/Button";

const OurMission = () => {
	return (
		<section className="py-48 bg-accent-dark flex flex-col items-center gap-12">
			<h2 className="text-accent-light text-6xl font-bold">Our Mission</h2>
			<p className="text-accent-light w-[700px] text-lg text-center leading-8">
				At EcoLife, we're dedicated to providing top-quality, sustainable
				products that have a minimal impact on our planet. Our mission is to
				help you make environmentally conscious choices for your everyday needs,
				reducing your environmental footprint and fostering a healthier future
				for all.
			</p>
			<Button light size="lg">
				Learn More
			</Button>
		</section>
	);
};

export default OurMission;
