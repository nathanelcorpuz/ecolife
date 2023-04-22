import ChoiceDisplay from "@/components/common/ChoiceDisplay";

const defaultProduct = {
	id: 1,
	title: "Product 1",
	choices: [
		{
			id: 1,
			title: "Size",
			value: "Large",
		},
		{
			id: 2,
			title: "Color",
			value: "Red",
		},
	],
	price: 100,
	quantity: 4,
};

export default function CheckoutOrderSummaryProduct({
	product = defaultProduct,
}) {
	return (
		<div className="flex justify-between border-b-2 border-b-standard-light-200 py-5 items-center">
			<div className="flex flex-col">
				<h1 className="text-lg font-bold">{product.title}</h1>
				<p>
					{product.choices.map((choice, index) => (
						<ChoiceDisplay
							key={choice.title}
							choice={choice}
							product={product}
							index={index}
						/>
					))}
				</p>
			</div>
			<div>
				<p className="text-lg font-bold">₱{product.price}</p>
				<p className="text-sm text-standard-balanced italic">Price</p>
			</div>
			<div>
				<p className="text-lg font-bold">{product.quantity}</p>
				<p className="text-sm text-standard-balanced italic">Qty</p>
			</div>
			<div>
				<p className="text-lg font-bold">₱{product.price * product.quantity}</p>
				<p className="text-sm text-standard-balanced italic">Subtotal</p>
			</div>
		</div>
	);
}
