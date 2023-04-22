"use client";

import { useContext } from "react";
import { CheckoutContext } from "../_components/CheckoutProvider";

export default function Page() {
	const { shippingInfo, setShippingInfo } = useContext(CheckoutContext);
	return (
		<main>
			<h1 className="text-6xl">Payment Information</h1>
			<p>{shippingInfo.name}</p>
		</main>
	);
}
