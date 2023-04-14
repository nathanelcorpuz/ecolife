"use client";

import Button from "../buttons/Button";
import BlogCard from "../cards/BlogCard";

const BlogInvite = () => {
	return (
		<section className="flex flex-col gap-20 py-40 bg-accent-light items-center">
			<div className="flex flex-col gap-4 text-center">
				<h2 className="text-5xl font-bold text-accent-dark">
					Eco Tips and Articles
				</h2>
				<p className="text-lg text-standard-balanced">
					Stay informed and inspired with our latest blog posts on
					sustainability
				</p>
			</div>
			<div className="flex justify-center gap-40">
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
			<div>
				<Button size="lg">Read our Blog</Button>
			</div>
		</section>
	);
};

export default BlogInvite;
