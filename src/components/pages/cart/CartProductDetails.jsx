import Checkbox from "@/components/common/inputs/Checkbox";
import Image from "next/image";
import img from "../../../../public/assets/products/product-1.jpg";

export default function CartProductDetails({ product }) {
	return (
		<div className="flex gap-24">
			<Checkbox labelText="" className="border-accent-balanced p-3" />
			<div className="flex gap-4">
				<Image src={img} width={80} height={20} />
				<div className="flex flex-col items-start">
					<h1>{product.title}</h1>
					<p>
						{/* format choices array to Color: Blue, Size: Medium */}
						{product.choices.map((choice, index) => (
							<span key={choice.title}>
								{choice.title}: {choice.value}
								{index < product.choices.length - 1 ? ", " : ""}
							</span>
						))}
					</p>
				</div>
			</div>
		</div>
	);
}
