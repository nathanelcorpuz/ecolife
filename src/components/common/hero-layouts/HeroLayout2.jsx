import Image from "next/image";
import CustomButton from "../buttons/Button";
import CustomButton2 from "../buttons/Button2";
import RightArrowIcon from "../icons/RightArrowIcon";
import defaultImg from "../../../../public/assets/products/product-1.jpg";

export default function HeroLayout2({
	src = defaultImg,
	alt = "Default hero img alt",
	title = "Hero Layout 2 Title",
	subtitle = "Subtitle for hero layout 2",
	mainCTAText = "Main CTA",
	secondaryCTAText = "Secondary CTA",
	wrapperClassName,
	noButtons = false,
}) {
	return (
		<section className={`flex items-center gap-28 ${wrapperClassName}`}>
			<div className="w-[900px] h-[550px] relative">
				<Image src={src} fill className="object-cover object-top" alt={alt} />
			</div>
			<div className="flex flex-col gap-7 max-w-[600px]">
				<h1 className="text-7xl font-bold text-accent-dark">{title}</h1>
				<p className="text-2xl text-standard-dark leading-10">{subtitle}</p>
				{noButtons ? null : (
					<div className="flex gap-5 items-center">
						<CustomButton size="md">{mainCTAText}</CustomButton>
						<div className="flex items-center gap-2">
							<CustomButton2>{secondaryCTAText}</CustomButton2>
							<RightArrowIcon />
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
