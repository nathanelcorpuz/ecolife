import Image from "next/image";
import CustomButton from "../buttons/Button";
import CustomButton2 from "../buttons/Button2";
import RightArrowIcon from "./RightArrowIcon";
import defaultImg from "../../../../public/assets/products/product-1.jpg";

export default function HeroLayout2({
	src = defaultImg,
	alt = "Default hero img alt",
	title = "Hero Layout 2 Title",
	subtitle = "Subtitle for hero layout 2",
	mainCTAText = "Main CTA",
	secondaryCTAText = "Secondary CTA",
}) {
	return (
		<section className="flex items-center justify-between pe-48">
			<div className="w-8/12 h-96 relative">
				<Image src={src} fill className="object-cover object-top" alt={alt} />
			</div>
			<div className="flex flex-col gap-7">
				<h1 className="text-5xl font-bold text-accent-dark">{title}</h1>
				<p className="text-2xl text-standard-dark">{subtitle}</p>
				<div className="flex gap-5 items-center">
					<CustomButton size="md">{mainCTAText}</CustomButton>
					<div className="flex items-center gap-2">
						<CustomButton2>{secondaryCTAText}</CustomButton2>
						<RightArrowIcon />
					</div>
				</div>
			</div>
		</section>
	);
}
