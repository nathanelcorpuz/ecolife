import style from "./Quantity.module.css";
import TriangleIcon from "@/components/common/icons/TriangleIcon";

export default function CartQuantity({ quantity }) {
	return (
		<div className="flex gap-4 items-center">
			<div className="p-2 cursor-pointer hover:bg-accent-light-300 rounded hover:scale-[1.2] transition-all rotate-180 active:bg-accent-light-green-300 active:scale-[1.1]">
				<TriangleIcon />
			</div>
			<input type="number" className={style.input} defaultValue={quantity} />
			<div className="p-2 cursor-pointer hover:bg-accent-light-300 rounded hover:scale-[1.2] transition-all active:bg-accent-light-green-300 active:scale-[1.1]">
				<TriangleIcon />
			</div>
		</div>
	);
}
