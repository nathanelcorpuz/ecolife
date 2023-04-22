"use client";

import LayoutNav from "@/components/common/LayoutNav";

const routes = [
	{
		name: "Shipping Information",
		href: "/checkout/shipping-information",
	},
	{
		name: "Order Summary",
		href: "/checkout/order-summary",
	},
	{
		name: "Payment Information",
		href: "/checkout/payment-information",
	},
];

export default function CheckoutNav() {
	return <LayoutNav routes={routes} />;
}
