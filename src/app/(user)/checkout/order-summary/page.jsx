"use server";

import { Suspense } from "react";
import CheckoutOrderSummaryProducts from "../_components/CheckoutOrderSummaryProducts";
import CheckoutShippingMethodDropdown from "../_components/CheckoutShippingMethodDropdown";

export default async function Page() {
	return (
		<main className="flex flex-col gap-6">
			<h1 className="text-6xl">Order Summary</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<CheckoutOrderSummaryProducts />
			</Suspense>
			<CheckoutShippingMethodDropdown />
		</main>
	);
}
