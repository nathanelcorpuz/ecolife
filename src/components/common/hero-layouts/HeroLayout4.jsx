"use client";

import { useState } from "react";
import defaultImg1 from "../../../../public/assets/products/product-1.jpg";
import defaultImg2 from "../../../../public/assets/products/product-2.jpg";
import defaultImg3 from "../../../../public/assets/products/product-3.jpg";
import CarouselControls from "./CarouselControls";
import ImageSection from "./ImageSection";
import { v4 as uuidv4 } from "uuid";

const sampleImageSections = [
	{
		src: defaultImg1,
		alt: "Default hero img alt",
		heading2: "Hero layout 4 heading2 for image section 1",
		subtitle: "Subtitle for hero layout 4 for image section 1",
		textContent: "Sample text content for hero layout 4 for image section 1",
		mainCTAText: "Main CTA",
		secondaryCTAText: "Secondary CTA",
	},
	{
		src: defaultImg2,
		alt: "Default hero img alt",
		heading2: "Hero layout 4 heading2 for image section 2",
		subtitle: "Subtitle for hero layout 4 for image section 2",
		textContent: "Sample text content for hero layout 4 for image section 2",
		mainCTAText: "Main CTA",
		secondaryCTAText: "Secondary CTA",
	},
	{
		src: defaultImg3,
		alt: "Default hero img alt",
		heading2: "Hero layout 4 heading2 for image section 3",
		subtitle: "Subtitle for hero layout 4 for image section 3",
		textContent: "Sample text content for hero layout 4 for image section 3",
		mainCTAText: "Main CTA",
		secondaryCTAText: "Secondary CTA",
	},
];

const HeroLayout4 = ({
	heading1 = "Hero layout 4 heading1",
	imageSections = sampleImageSections,
	imagePosition = "top",
	wrapperClassName,
}) => {
	const [activeSection, setActiveSection] = useState(0);
	return (
		<section
			className={`flex flex-col gap-24 items-center relative ${wrapperClassName}`}
		>
			<h1 className="text-7xl font-bold text-accent-dark">{heading1}</h1>
			<div
				className={`transition-all flex ${
					activeSection === 0
						? "ms-[200vw]"
						: activeSection === 1
						? "ms-0"
						: "me-[200vw]"
				}`}
			>
				{imageSections.map((imageSection) => (
					<ImageSection
						key={uuidv4()}
						isMirrored
						imagePosition={imagePosition}
						{...imageSection}
					/>
				))}
			</div>
			<CarouselControls
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
		</section>
	);
};

export default HeroLayout4;
