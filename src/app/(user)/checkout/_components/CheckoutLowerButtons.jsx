"use client";

import Button from "@/components/common/buttons/Button";
import Button2 from "@/components/common/buttons/Button2";
import { usePathname, useRouter } from "next/navigation";

export default function CheckoutLowerButtons() {
	const pathname = usePathname();
	const router = useRouter();
	const isOnShippingInfoPage = pathname === "/checkout/shipping-information";
	const isOnOrderSummaryPage = pathname === "/checkout/order-summary";
	const isOnPaymentInfoPage = pathname === "/checkout/payment-information";

	const handleBack = () => {
		if (isOnShippingInfoPage) {
			router.push("/cart");
		} else if (isOnOrderSummaryPage) {
			router.push("/checkout/shipping-information");
		} else if (isOnPaymentInfoPage) {
			router.push("/checkout/order-summary");
		}
	};

	const handleConfirm = () => {
		if (isOnShippingInfoPage) {
			router.push("/checkout/order-summary");
		} else if (isOnOrderSummaryPage) {
			router.push("/checkout/payment-information");
		} else if (isOnPaymentInfoPage) {
			// process payment
		}
	};
	return (
		<div className="flex justify-between">
			<Button2 onClick={handleBack}>
				{isOnShippingInfoPage && "Back to cart"}
				{isOnOrderSummaryPage && "Back to shipping info"}
				{isOnPaymentInfoPage && "Back to order summary"}
			</Button2>
			<Button onClick={handleConfirm}>Confirm</Button>
		</div>
	);
}
