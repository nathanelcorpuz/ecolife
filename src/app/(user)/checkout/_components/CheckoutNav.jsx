"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CheckoutNav() {
	const pathname = usePathname();

	const activeClass =
		"text-accent-balanced border-b-4 border-b-accent-balanced";

	const isOnShippingInformation = pathname === "/checkout/shipping-information";
	const isOnOrderSummary = pathname === "/checkout/order-summary";
	const isOnPaymentInformation = pathname === "/checkout/payment-information";
	return (
		<nav>
			<ul className="flex items-center">
				<li>
					<Link
						className={`font-bold w-[350px] h-[50px] grid place-content-center hover:bg-accent-light-green rounded transition-all rounded-b-none rounded-br-none border-b-4  ${
							isOnShippingInformation && activeClass
						}`}
						href="/checkout/shipping-information"
					>
						Shipping Information
					</Link>
				</li>
				<li>
					<Link
						className={`font-bold w-[350px] h-[50px] grid place-content-center hover:bg-accent-light-green rounded transition-all rounded-b-none rounded-br-none border-b-4  ${
							isOnOrderSummary && activeClass
						}`}
						href="/checkout/order-summary"
					>
						Order Summary
					</Link>
				</li>
				<li>
					<Link
						className={`font-bold w-[350px] h-[50px] grid place-content-center hover:bg-accent-light-green rounded transition-all rounded-b-none rounded-br-none border-b-4  ${
							isOnPaymentInformation && activeClass
						}`}
						href="/checkout/payment-information"
					>
						Payment Information
					</Link>
				</li>
			</ul>
		</nav>
	);
}
