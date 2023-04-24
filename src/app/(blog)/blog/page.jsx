import Button from "@/components/common/buttons/Button";
import ArticlePreview from "./_components/ArticlePreview";
import SmallArticlePreview from "./_components/SmallArticlePreview";

export default function Blog() {
	return (
		<main className="max-w-[1300px] m-auto">
			<section className="pt-12 pb-36 flex gap-24">
				<div>
					<h1 className="text-5xl font-bold pb-8">Featured</h1>
					<ArticlePreview />
				</div>
				<div>
					<h1 className="text-5xl font-bold pb-8">Latest</h1>
					<div className="flex flex-col gap-8">
						<SmallArticlePreview />
						<SmallArticlePreview />
						<SmallArticlePreview />
						<SmallArticlePreview />
					</div>
				</div>
			</section>
			<section className="py-36 flex flex-col gap-16 justify-start">
				<h1 className="text-5xl font-bold">Popular</h1>
				<div className="flex flex-wrap gap-16">
					<ArticlePreview isSmall />
					<ArticlePreview isSmall />
					<ArticlePreview isSmall />
					<ArticlePreview isSmall />
					<ArticlePreview isSmall />
					<ArticlePreview isSmall />
				</div>
				<div className="w-[250px]">
					<Button size="lg">Load more</Button>
				</div>
			</section>
		</main>
	);
}
