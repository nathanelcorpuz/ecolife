"use client";

import Button from "@/components/common/buttons/Button";
import CartProduct from "./CartProduct";
import Link from "next/link";
import Button2 from "@/components/common/buttons/Button2";
import { useRouter } from "next/navigation";
import RightArrowIcon from "@/components/common/icons/RightArrowIcon";

export default function Cart({ products }) {
	const router = useRouter();
	return (
		<section className="max-w-[1600px] m-auto pt-12 pb-36">
			<div className="flex flex-col gap-4">
				<h1 className="text-2xl text-center font-bold">
					Review your items before checking out
				</h1>
			</div>
			<table className="m-auto mt-12">
				<thead>
					<tr>
						<th className="text-standard-balanced p-4 font-normal text-sm">
							Product
						</th>
						<th className="text-standard-balanced p-4 font-normal text-sm">
							Price
						</th>
						<th className="text-standard-balanced p-4 font-normal text-sm">
							Quantity
						</th>
						<th className="text-standard-balanced p-4 font-normal text-sm">
							Subtotal
						</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<CartProduct key={product.id} product={product} />
					))}
				</tbody>
			</table>
			<div className="flex justify-between max-w-[1300px] m-auto mt-12 items-center">
				<div>
					<Button2
						onClick={() => router.back()}
						className="hover:bg-standard-light-200 p-2 rounded transition-all"
					>
						<div className="flex items-center gap-2">
							<div className="rotate-180">
								<RightArrowIcon />
							</div>
							Continue shopping
						</div>
					</Button2>
				</div>
				<div className="flex flex-col gap-6">
					<div className="flex gap-24 items-center">
						<p className="text-2xl text-standard-balanced">Subtotal</p>
						<p className="text-4xl font-bold text-accent-balanced">₱10,000</p>
					</div>
					<Button>
						<Link className="p-2 text-2xl block" href="/checkout/shipping-information">
							Proceed to checkout
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
