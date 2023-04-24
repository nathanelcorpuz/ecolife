export default function Page({ params }) {
	return (
		<main className="pt-12 pb-36 flex flex-col gap-8 max-w-[800px] m-auto">
			<section>
				<h1 className="text-bold text-5xl leading-[60px]">
					Easy Eco-Swaps: 5 Simple Ways to Make Your Home Greener
				</h1>
				<p className="text-sm text-standard-balanced">by Nathanel Corpuz</p>
				<p className="text-sm text-standard-balanced">April 20, 2022</p>
			</section>
			<p className="leading-8">
				Welcome to the Ecolife blog! Today, we'll share five easy and affordable
				eco-friendly swaps you can make in your home to reduce waste, save
				energy, and live a more sustainable lifestyle. Let's dive in and explore
				these simple, yet effective, changes that can have a lasting impact on
				our planet.
			</p>
			<ol className="flex flex-col gap-6">
				<li className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">1. Ditch the Plastic</h1>
					<p className="leading-8">
						One of the simplest ways to make your home greener is to reduce your
						plastic use. Start by switching to reusable shopping bags, water
						bottles, and food containers. These eco-friendly alternatives not
						only help reduce plastic waste but also save you money in the long
						run.
					</p>
				</li>
				<li className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">
						2. Save Energy with Smart Lighting
					</h1>
					<p className="leading-8">
						Replace your traditional incandescent bulbs with energy-efficient
						LED bulbs. LED lights use up to 85% less energy and last
						significantly longer than incandescent bulbs, helping you save on
						energy costs while reducing your carbon footprint.
					</p>
				</li>
				<li className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">3. Go Green with Your Cleaning</h1>
					<p className="leading-8">
						Switch to eco-friendly cleaning products made from plant-based
						ingredients. These natural alternatives are free of harsh chemicals
						and often come in recyclable or reusable packaging, making them a
						greener choice for your household cleaning needs.
					</p>
				</li>
				<li className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">
						4. Embrace Reusable Kitchen Items
					</h1>
					<p className="leading-8">
						Reduce your kitchen waste by investing in reusable items such as
						beeswax food wraps, silicone food storage bags, and cloth napkins.
						These eco-friendly swaps not only help you cut down on waste but
						also add a touch of sustainability to your kitchen.
					</p>
				</li>
				<li className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">5. Plant a Garden</h1>
					<p className="leading-8">
						Whether you have a spacious backyard or a small balcony, planting a
						garden is a fun and rewarding way to go green. Grow your own herbs,
						vegetables, or flowers to enjoy fresh, organic produce and
						contribute to a healthier environment.
					</p>
				</li>
			</ol>
			<p className="leading-8">
				Making your home greener doesn't have to be complicated or expensive.
				With these five simple eco-swaps, you can create a more sustainable
				living space while reducing waste and conserving resources. Visit our
				Ecolife online shop to explore our wide range of eco-friendly products
				that can help you on your journey to a more sustainable lifestyle. Happy
				green living!
			</p>
		</main>
	);
}
