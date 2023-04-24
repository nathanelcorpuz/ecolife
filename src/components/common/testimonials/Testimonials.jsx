"use client";

import { useState } from "react";
import CarouselControls from "../hero-layouts/CarouselControls";
import TestimonialSection from "./TestimonialSection";

const sections = [
	{
		image: "image 1",
		name: "Charles R",
		date: "Jan 1, 2020",
		testimonialComment:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis urna eget fringilla cursus. Proin malesuada, augue ut fermentum egestas, enim odio varius mi, et ullamcorper turpis neque nec libero.",
	},
	{
		image: "image 2",
		name: "Steve H",
		date: "Feb 1, 2020",
		testimonialComment:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis urna eget fringilla cursus. Proin malesuada, augue ut fermentum egestas, enim odio varius mi, et ullamcorper turpis neque nec libero. 2",
	},
	{
		image: "image 3",
		name: "Emily W",
		date: "Mar 1, 2020",
		testimonialComment:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis urna eget fringilla cursus. Proin malesuada, augue ut fermentum egestas, enim odio varius mi, et ullamcorper turpis neque nec libero. 3",
	},
];

export default function Testimonials() {
	const [activeSection, setActiveSection] = useState(0);
	return (
		<section className="flex flex-col gap-24 relative items-center bg-standard-light py-36">
			<h1 className="text-5xl font-bold text-accent-dark">Testimonials</h1>
			<div
				className={`transition-all flex ${
					activeSection === 0
						? "ms-[200vw]"
						: activeSection === 1
						? "ms-0"
						: "me-[200vw]"
				}`}
			>
				{sections.map((section) => (
					<TestimonialSection key={section.name} section={section} />
				))}
			</div>

			<CarouselControls
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
		</section>
	);
}
