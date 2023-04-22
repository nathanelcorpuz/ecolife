"use client";

import { createContext, useState } from "react";

export const CheckoutContext = createContext({});

export default function CheckoutProvider({ children }) {
	const [shippingInfo, setShippingInfo] = useState({
		name: "",
		address: "",
		contactNumber: "",
		city: "",
		state: "",
		postal: "",
		country: "",
	});
	const [orderSummary, setOrderSummary] = useState({
		shippingMethod: "",
	});
	const [paymentInfo, setPaymentInfo] = useState({
		method: "",
		cardHolderName: "",
		cardNumber: "",
		expirationDate: "",
		securityCode: "",
		billingAddress: "",
		subtotal: "",
		billingAddressChecked: true,
	});
	return (
		<CheckoutContext.Provider
			value={{
				shippingInfo,
				setShippingInfo,
				orderSummary,
				setOrderSummary,
				paymentInfo,
				setPaymentInfo,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
}
