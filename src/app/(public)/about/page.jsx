import HeroLayout1 from "@/components/common/hero-layouts/HeroLayout1";
import HeroLayout2 from "@/components/common/hero-layouts/HeroLayout2";
import HeroLayout3 from "@/components/common/hero-layouts/HeroLayout3";
import HeroLayout4 from "@/components/common/hero-layouts/HeroLayout4";
import Testimonials from "@/components/common/testimonials/Testimonials";

import valuesImg1 from "../../../../public/assets/products/product-1.jpg";
import valuesImg2 from "../../../../public/assets/products/product-2.jpg";
import valuesImg3 from "../../../../public/assets/products/product-3.jpg";

import sustainabilityImg1 from "../../../../public/assets/products/product-9.jpg";
import sustainabilityImg2 from "../../../../public/assets/products/product-10.jpg";
import sustainabilityImg3 from "../../../../public/assets/products/product-11.jpg";

import sarahGreenImg from "../../../../public/assets/about/sarah-green.jpg";
import markJohnsonImg from "../../../../public/assets/about/mark-johnson.jpg";
import lisaBrownImg from "../../../../public/assets/about/lisa-brown.jpg";

import productsImg1 from "../../../../public/assets/about/about-hero-1.jpg";
import productsImg2 from "../../../../public/assets/about/about-hero-2.jpg";
import productsImg3 from "../../../../public/assets/about/about-hero-3.jpg";

const valuesImageSections = [
	{
		src: valuesImg1,
		alt: "Default hero img alt",
		heading2: "Integrity",
		subtitle:
			"We believe in being open and honest about our products, suppliers, and business practices.",
		textContent: "",
		mainCTAText: "",
		secondaryCTAText: "",
	},
	{
		src: valuesImg2,
		alt: "Default hero img alt",
		heading2: "Quality",
		subtitle:
			"We're dedicated to providing high-quality, durable items that stand the test of time.",
		textContent: "",
		mainCTAText: "",
		secondaryCTAText: "",
	},
	{
		src: valuesImg3,
		alt: "Default hero img alt",
		heading2: "Sustainability",
		subtitle:
			"We strive to minimize our environmental impact through ethical sourcing, eco-friendly materials, and waste reduction initiatives.",
		textContent: "",
		mainCTAText: "",
		secondaryCTAText: "",
	},
];

const sustainabilitySections = [
	{
		src: sustainabilityImg1,
		alt: "Default hero img alt",
		heading2: "Commitment to Sustainability",
		subtitle:
			"At EcoLife, we understand the importance of protecting our planet for future generations. That's why we carefully select our products and suppliers to ensure they meet our high standards for sustainability and ethical business practices. ",
		textContent:
			"We prioritize eco-friendly materials, such as organic cotton, bamboo, and biodegradable packaging, to reduce waste and minimize our carbon footprint.",
		mainCTAText: "",
		secondaryCTAText: "",
	},
	{
		src: sustainabilityImg2,
		alt: "Default hero img alt",
		heading2: "Partnerships and Initiatives",
		subtitle:
			"We proudly partner with organizations that share our commitment to sustainability, such as Greenpeace and the Rainforest Alliance.",
		textContent:
			"Through these collaborations, we support projects that promote environmental conservation, clean energy, and responsible waste management.",
		mainCTAText: "",
		secondaryCTAText: "",
	},
	{
		src: sustainabilityImg3,
		alt: "Default hero img alt",
		heading2: "Empowering Eco-Conscious Consumers",
		subtitle:
			"By providing eco-friendly options and valuable information, EcoLife empowers consumers to make informed choices that benefit our planet.",
		textContent:
			"Our educational resources and transparent supply chain information allow customers to support companies that prioritize sustainability, ethical labor practices, and environmental stewardship.",
		mainCTAText: "",
		secondaryCTAText: "",
	},
];

const teamSections = [
	{
		src: sarahGreenImg,
		alt: "Default hero img alt",
		heading2: "Sarah Green",
		subtitle: "Founder & CEO",
		textContent:
			"With a background in environmental studies, Sarah brings a wealth of knowledge and passion to EcoLife. She leads our team with a focus on innovation and a commitment to providing the best sustainable products available.",
		mainCTAText: "",
		secondaryCTAText: "",
	},
	{
		src: markJohnsonImg,
		alt: "Default hero img alt",
		heading2: "Mark Johnson",
		subtitle: "Operations Manager",
		textContent:
			"Mark's expertise in logistics and supply chain management ensures that our products reach customers efficiently and with minimal environmental impact.",
		mainCTAText: "",
		secondaryCTAText: "",
	},
	{
		src: lisaBrownImg,
		alt: "Default hero img alt",
		heading2: "Lisa Brown",
		subtitle: "Product Specialist",
		textContent:
			"Lisa's keen eye for quality and her dedication to sourcing the best eco-friendly products make her an invaluable asset to the EcoLife team.",
		mainCTAText: "",
		secondaryCTAText: "",
	},
];

const productsSections = [
	{
		src: productsImg1,
		alt: "Default hero img alt",
		heading2: "",
		subtitle:
			"At EcoLife, we offer a wide range of sustainable products designed to help you reduce your environmental impact.",
		textContent: "",
		mainCTAText: "",
		secondaryCTAText: "",
	},
	{
		src: productsImg2,
		alt: "Default hero img alt",
		heading2: "",
		subtitle:
			"From reusable containers and eco-friendly cleaning supplies to natural skincare and ethical fashion, our carefully curated selection caters to every aspect of your life.",
		textContent: "",
		mainCTAText: "",
		secondaryCTAText: "",
	},
	{
		src: productsImg3,
		alt: "Default hero img alt",
		heading2: "",
		subtitle:
			"We meticulously source our products from trusted suppliers who share our commitment to quality, sustainability, and fair labor practices.",
		textContent: "",
		mainCTAText: "",
		secondaryCTAText: "",
	},
];

export default function About() {
	return (
		<main className="flex flex-col overflow-x-hidden">
			<HeroLayout1
				wrapperClassName="pt-12 pb-36 bg-accent-light"
				title="Our Story"
				subtitle="Discover our journey to making the world a greener place."
				noButtons
			/>
			<HeroLayout2
				wrapperClassName="py-36 bg-standard-light"
				title="Our Mission"
				subtitle="To empower consumers to make eco-friendly choices by offering a diverse range of sustainable products that positively impact the environment and our communities"
				noButtons
			/>
			<HeroLayout3
				heading1="Our Values"
				wrapperClassName="py-36 bg-accent-light"
				imageSections={valuesImageSections}
			/>
			<HeroLayout4
				heading1="Sustainability Initiatives"
				wrapperClassName="py-36 bg-standard-light"
				imageSections={sustainabilitySections}
				imagePosition="center"
			/>
			<HeroLayout3
				heading1="Meet Our Team"
				wrapperClassName="py-36 bg-accent-light"
				imageSections={teamSections}
			/>
			<HeroLayout4
				heading1="Our Products"
				imageSections={productsSections}
				wrapperClassName="py-36 bg-standard-light"
			/>
			<HeroLayout1
				title="Join the eco-friendly movement"
				subtitle="We invite you to explore our wide range of sustainable products and discover the difference that shopping at EcoLife can make."
				mainCTAText="Shop Now"
				secondaryCTAText="Best Sellers"
				wrapperClassName="py-36"
			/>
			<Testimonials />
		</main>
	);
}
