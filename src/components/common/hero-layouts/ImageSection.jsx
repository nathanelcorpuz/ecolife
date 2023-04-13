"use client";

import Image from "next/image";
import CustomButton from "../buttons/CustomButton";
import CustomButton2 from "../buttons/CustomButton2";
import RightArrowIcon from "./RightArrowIcon";

const ImageSection = ({
	heading2,
	subtitle,
	textContent,
	mainCTAText,
	secondaryCTAText,
	src,
	alt,
}) => {
	return (
		<div className="flex items-center justify-center w-screen gap-52">
			<div className="flex flex-col gap-7">
				<h2 className="text-3xl font-bold text-accent-dark">{heading2}</h2>
				<p className="text-xl text-standard-dark">{subtitle}</p>
				<p>{textContent}</p>
				<div className="flex gap-5 items-center">
					<CustomButton size="md">{mainCTAText}</CustomButton>
					<div className="flex items-center gap-2">
						<CustomButton2>{secondaryCTAText}</CustomButton2>
						<RightArrowIcon />
					</div>
				</div>
			</div>
			<div className="w-5/12 h-[32rem] relative">
				<Image src={src} fill className="object-cover object-top" alt={alt} />
			</div>
		</div>
	);
};

export default ImageSection;
