import img from "../../../../../public/assets/blog/blog-1.jpg";
import Image from "next/image";

const defaultArticle = {
	title:
		"Green Living: Top 10 Eco-Friendly Products for a Sustainable Lifestyle",
	author: "Nathanel C",
	date: "April 20, 2022",
	intro:
		"Discover the must-have eco-friendly products that are revolutionizing the way we live and shop. In this blog post, we'll explore the top 10 sustainable items available at Ecolife, from reusable shopping bags to energy-efficient gadgets",
};

export default function SmallArticlePreview({ article = defaultArticle }) {
	return (
		<article className="flex gap-5 items-center">
			<div className="relative w-[100px] h-[60px]">
				<Image
					src={img}
					fill
					className="object-cover object-center"
					alt="sample"
				/>
			</div>
			<div className="flex flex-col">
				<h1 className="font-bold">{article.title}</h1>
				<p className="text-sm text-standard-balanced">{article.date}</p>
			</div>
		</article>
	);
}
