"use client";

import Image from "next/image";
import CustomButton from "../buttons/Button";
import CustomButton2 from "../buttons/Button2";
import RightArrowIcon from "../icons/RightArrowIcon";

const ImageSection = ({
	heading2,
	subtitle,
	textContent,
	mainCTAText,
	secondaryCTAText,
	src,
	alt,
	isMirrored = false,
	imagePosition,
}) => {
	const noTextContent = textContent === "";
	const noButtons = mainCTAText === "" && secondaryCTAText === "";
	return (
		<div className="flex flex-row items-center justify-center w-screen gap-12">
			<div
				className={`flex flex-col gap-7 w-[800px] ${isMirrored && "order-1"}`}
			>
				<h2 className="text-3xl font-bold text-accent-dark">{heading2}</h2>
				<p className="text-xl text-standard-dark leading-9">{subtitle}</p>
				{!noTextContent && (
					<p className="text-standard-balanced leading-7">{textContent}</p>
				)}
				{!noButtons && (
					<div className="flex gap-5 items-center">
						<CustomButton size="md">{mainCTAText}</CustomButton>
						<div className="flex items-center gap-2">
							<CustomButton2>{secondaryCTAText}</CustomButton2>
							<RightArrowIcon />
						</div>
					</div>
				)}
			</div>
			<div className="w-[800px] h-[32rem] relative">
				<Image
					src={src}
					fill
					className={`object-cover object-${imagePosition}`}
					alt={alt}
				/>
			</div>
		</div>
	);
};

export default ImageSection;
