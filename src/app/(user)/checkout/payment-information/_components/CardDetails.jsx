"use client";

import Input from "@/components/common/inputs/Input";
import Dropdown from "@/components/common/inputs/dropdown/Dropdown";
import { useContext } from "react";
import { CheckoutContext } from "../../_components/CheckoutProvider";
import Checkbox from "@/components/common/inputs/Checkbox";

export default function CardDetails() {
	const { paymentInfo, setPaymentInfo } = useContext(CheckoutContext);
	return (
		<div className="w-[50%] flex flex-col gap-4">
			<Dropdown title="Payment Method" width="w-[100%]" />
			<Input label="Cardholder Name" />
			<Input label="Card Number" />
			<div className="flex gap-4">
				<Input label="Expiration date" placeholder="MM/YY" />
				<Input label="Security Code" placeholder="CVC" />
			</div>
			<div className="pt-4">
				<Checkbox
					label="Billing address is the same as shipping address"
					className="p-3"
					inputProps={{
						checked: paymentInfo.billingAddressChecked,
						onChange: (e) =>
							setPaymentInfo({
								...paymentInfo,
								billingAddressChecked: e.target.checked,
							}),
					}}
				/>
			</div>
		</div>
	);
}
