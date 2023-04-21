export default function Review({ review }) {
	return (
		<section className="border border-standard-dark-300 rounded p-8 gap-6 flex flex-col w-[100%]">
			<div className="flex justify-between">
				<p className="text-standard-balanced italic">{review.name}</p>
				<p className="text-standard-balanced-300 italic">
					{review.dateCreated}
				</p>
			</div>
			<p className="text-2xl">{review.comment}</p>
		</section>
	);
}
