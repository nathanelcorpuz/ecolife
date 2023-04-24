"use client";

import { useRouter } from "next/navigation";
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

export default function ArticlePreview({ article = defaultArticle, isSmall }) {
	const router = useRouter();

	const onClick = () => {
		router.push("/blog/test-article");
	};

	if (isSmall) {
		return (
			<article className="w-[350px] flex flex-col gap-2 cursor-pointer" onClick={onClick}>
				<div className="w-[100%] h-[200px] relative">
					<Image
						src={img}
						fill
						className="object-cover object-center"
						alt="sample"
					/>
				</div>
				<h1 className="font-bold text-2xl">{article.title}</h1>
				<div className="flex flex-col gap-1">
					<p className="text-sm text-standard-balanced">by {article.author}</p>
					<p className="text-sm text-standard-balanced">{article.date}</p>
				</div>
				<p>{article.intro}</p>
			</article>
		);
	}
	return (
		<article className="w-[700px] flex flex-col gap-2 cursor-pointer" onClick={onClick}>
			<div className="w-[100%] h-[400px] relative">
				<Image
					src={img}
					fill
					className="object-cover object-center"
					alt="sample"
				/>
			</div>
			<h1 className="font-bold text-2xl">{article.title}</h1>
			<div className="flex flex-col gap-1">
				<p className="text-sm text-standard-balanced">by {article.author}</p>
				<p className="text-sm text-standard-balanced">{article.date}</p>
			</div>
			<p>{article.intro}</p>
		</article>
	);
}
