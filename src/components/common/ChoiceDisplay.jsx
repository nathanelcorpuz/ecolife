export default function ChoiceDisplay({ choice, product, index }) {
	return (
		<span
			className="text-sm font-normal italic text-standard-balanced"
			key={choice.title}
		>
			{choice.title}: {choice.value}
			{index < product.choices.length - 1 ? ", " : ""}
		</span>
	);
}
