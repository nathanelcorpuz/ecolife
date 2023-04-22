"use client";

import { useContext } from "react";
import { CheckoutContext } from "../_components/CheckoutProvider";
import Input from "@/components/common/inputs/Input";

export default function Page() {
	const { shippingInfo, setShippingInfo } = useContext(CheckoutContext);
	return (
		<main className="flex flex-col gap-12">
			<div>
				<h1 className="text-6xl">Shipping information</h1>
			</div>
			<div className="flex gap-4">
				<div className="flex flex-col gap-4 w-[50%]">
					<Input type="text" label="Name" />
					<Input type="text" label="Address" />
					<Input type="text" label="Contact Number" />
				</div>
				<div className="flex flex-col gap-4 w-[50%]">
					<div className="flex gap-4">
						<Input type="text" label="City" />
						<Input type="text" label="State" />
					</div>
					<Input type="text" label="Postal Code" />
					<Input type="text" label="Country" />
				</div>
			</div>
		</main>
	);
}
