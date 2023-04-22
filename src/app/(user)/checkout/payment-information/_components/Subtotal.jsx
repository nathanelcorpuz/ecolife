"use client";

import { useContext, useEffect } from "react";
import { CheckoutContext } from "../../_components/CheckoutProvider";

export default function Subtotal({ subtotal }) {
	const { setPaymentInfo } = useContext(CheckoutContext);
	useEffect(() => {
		setPaymentInfo((prev) => ({ ...prev, subtotal }));
	}, [setPaymentInfo]);
	return <p>₱{subtotal}</p>;
}
