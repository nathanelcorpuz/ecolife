"use client";

import { useContext } from "react";
import { CheckoutContext } from "../../_components/CheckoutProvider";
import ComputationWrapper from "./ComputationWrapper";

export default function Computations() {
	const { paymentInfo } = useContext(CheckoutContext);

	const { subtotal } = paymentInfo;
	const tax = subtotal * 0.1;
	const shipping = 135;

	if (!subtotal) {
		return <p>Waiting for subtotal...</p>;
	}
	return (
		<>
			<ComputationWrapper>
				<p>10% tax</p>
				<p>{tax}</p>
			</ComputationWrapper>
			<ComputationWrapper>
				<p>Shipping</p>
				<p>₱{shipping}</p>
			</ComputationWrapper>
			<ComputationWrapper>
				<p className="text-4xl">Total</p>
				<p className="text-6xl">₱{subtotal + tax + shipping}</p>
			</ComputationWrapper>
		</>
	);
}
