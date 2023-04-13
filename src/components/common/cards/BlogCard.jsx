import blogImg1 from "../../../../public/assets/blog/blog-1.jpg";
import blogImg2 from "../../../../public/assets/blog/blog-2.jpg";
import blogImg3 from "../../../../public/assets/blog/blog-3.jpg";
import blogImg4 from "../../../../public/assets/blog/blog-4.jpg";
import blogImg5 from "../../../../public/assets/blog/blog-5.jpg";
import CardContainer from "./CardContainer";
import CardImage from "./CardImage";

export default function BlogCard() {
	const randomizedImg = Math.floor(Math.random() * 5) + 1;

	const getRandomImg = () => {
		switch (randomizedImg) {
			case 1:
				return blogImg1;
			case 2:
				return blogImg2;
			case 3:
				return blogImg3;
			case 4:
				return blogImg4;
			case 5:
				return blogImg5;
			default:
				return blogImg1;
		}
	};

	return (
		<CardContainer>
			<CardImage src={getRandomImg()} />
			<p className="text-standard-balanced text-sm">Nathanel Corpuz</p>
			<h2 className="text-standard-dark text-xl">
				10 Simple Steps to Start Living a Zero-Waste Lifestyle
			</h2>
			<p className="text-standard-balanced text-sm">July 1, 2023</p>
		</CardContainer>
	);
}
