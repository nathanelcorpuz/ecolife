import Image from "next/image";
import CustomButton from "../buttons/Button";
import CustomButton2 from "../buttons/Button2";
import RightArrowIcon from "./RightArrowIcon";
import defaultImg from "../../../../public/assets/products/product-1.jpg";

export default function HeroLayout1({
	src = defaultImg,
	alt = "Default hero img alt",
	title = "Hero Layout 1 Title",
	subtitle = "Subtitle for hero layout 1",
	mainCTAText = "Main CTA",
	secondaryCTAText = "Secondary CTA",
	bgColor = "bg-accent-light",
}) {
	return (
		<section className={`flex items-center justify-between ps-48 ${bgColor}`}>
			<div className="flex flex-col gap-7 w-[30%]">
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
			<div className="w-[60%] h-[550px] relative">
				<Image src={src} fill className="object-cover object-top" alt={alt} />
			</div>
		</section>
	);
}
