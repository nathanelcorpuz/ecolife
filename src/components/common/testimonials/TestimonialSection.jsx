import style from "./TestimonialSection.module.css";
import Image from "next/image";
import icon from "../../../../public/assets/testimonial-icon.png";
import img1 from "../../../../public/assets/about/testimonial-1.jpg";
import img2 from "../../../../public/assets/about/testimonial-2.jpg";
import img3 from "../../../../public/assets/about/testimonial-3.jpg";

const sampleSection = {
	name: "Emily R",
	date: "2021-01-01",
	testimonialIcon: "testimonialIcon",
	testimonialComment: "testimonialComment",
};

export default function TestimonialSection({ section = sampleSection }) {
	return (
		<div className="w-screen flex flex-col items-center">
			<div className={style.wrapper}>
				{section.image === "image 1" && (
					<Image
						src={img1}
						fill
						className="object-cover object-top"
						alt="Test"
					/>
				)}
				{section.image === "image 2" && (
					<Image
						src={img2}
						fill
						className="object-cover object-top"
						alt="Test"
					/>
				)}
				{section.image === "image 3" && (
					<Image
						src={img3}
						fill
						className="object-cover object-top"
						alt="Test"
					/>
				)}
			</div>
			<div className="flex flex-col gap-4 items-center">
				<p className="font-bold">{section.name}</p>
				<p className="text-standard-balanced text-sm">{section.date}</p>
				<div className="w-[50px] h-[30px] relative">
					<Image
						src={icon}
						fill
						className="object-contain object-center"
						alt="test"
					/>
				</div>
				<p className="max-w-[600px] text-center">
					{section.testimonialComment}
				</p>
			</div>
		</div>
	);
}
