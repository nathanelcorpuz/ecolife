"use client";

import Checkbox from "@/components/common/inputs/Checkbox";

const ByCategory = () => {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="font-bold">Filter by Category</h2>
			<div className="flex flex-col gap-4">
				<Checkbox
					inputProps={{
						type: "checkbox",
						id: "kitchen",
						name: "kitchen",
						value: "kitchen",
					}}
					labelProps={{ htmlFor: "kitchen" }}
					labelText="Kitchen"
				/>
				<Checkbox
					inputProps={{
						type: "checkbox",
						id: "personalCare",
						name: "personalCare",
						value: "personalCare",
					}}
					labelProps={{ htmlFor: "personalCare" }}
					labelText="Personal Care"
				/>
				<Checkbox
					inputProps={{
						type: "checkbox",
						id: "fashion",
						name: "fashion",
						value: "fashion",
					}}
					labelProps={{ htmlFor: "fashion" }}
					labelText="Fashion"
				/>
			</div>
		</section>
	);
};

export default ByCategory;
