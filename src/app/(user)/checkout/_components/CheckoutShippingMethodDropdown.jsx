"use client";

import Dropdown from "@/components/common/inputs/dropdown/Dropdown";
import { useContext } from "react";
import { CheckoutContext } from "./CheckoutProvider";

export default function CheckoutShippingMethodDropdown() {
	const { orderSummary, setOrderSummary } = useContext(CheckoutContext);
	return (
		<div className="ms-auto w-[fit-content] pt-8">
			<Dropdown
				title="Shipping method"
				options={[
					{
						value: "standard",
						label: "Standard",
					},
					{
						value: "express",
						label: "Express",
					},
				]}
				value={orderSummary.shippingMethod}
				setValue={(value) =>
					setOrderSummary({ ...orderSummary, shippingMethod: value })
				}
			/>
		</div>
	);
}
