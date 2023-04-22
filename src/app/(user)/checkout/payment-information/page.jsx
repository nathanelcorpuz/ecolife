"use server";

import CardDetails from "./_components/CardDetails";
import { Suspense } from "react";
import CheckoutPaymentInfoSubtotal from "../_components/CheckoutPaymentInfoSubtotal";
import BillingAddress from "./_components/BillingAddress";
import Computations from "./_components/Computations";

export default async function Page() {
	return (
		<main>
			<h1 className="text-6xl">Payment Information</h1>
			<div className="flex gap-8 pt-8">
				<CardDetails />
				<div className="flex flex-col w-[50%] gap-4">
					<BillingAddress />
					<div className="flex flex-col gap-2">
						<Suspense fallback={<div>loading...</div>}>
							<CheckoutPaymentInfoSubtotal />
						</Suspense>
						<Computations />
					</div>
				</div>
			</div>
		</main>
	);
}
