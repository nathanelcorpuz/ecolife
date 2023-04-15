"use client";

import Checkbox from "@/components/common/inputs/Checkbox";

const BySubCategory = () => {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="font-bold">Filter by Subcategory</h2>
			<div className="flex flex-col gap-4">
				<p className="italic text-standard-balanced">Kitchen</p>
				<Checkbox
					inputProps={{
						type: "checkbox",
						id: "reusableContainers",
						name: "reusableContainers",
						value: "reusableContainers",
					}}
					labelProps={{ htmlFor: "reusableContainers" }}
					labelText="Reusable Containers"
				/>
				<Checkbox
					inputProps={{
						type: "checkbox",
						id: "ecoFriendlyCleaningSupplies",
						name: "ecoFriendlyCleaningSupplies",
						value: "ecoFriendlyCleaningSupplies",
					}}
					labelProps={{ htmlFor: "ecoFriendlyCleaningSupplies" }}
					labelText="Eco-friendly Cleaning Supplies"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<p className="italic text-standard-balanced">Personal Care</p>
				<Checkbox
					inputProps={{
						type: "checkbox",
						id: "naturalSkinCare",
						name: "naturalSkinCare",
						value: "naturalSkinCare",
					}}
					labelProps={{ htmlFor: "naturalSkinCare" }}
					labelText="Natural Skincare"
				/>
				<Checkbox
					inputProps={{
						type: "checkbox",
						id: "sustainableDentalCare",
						name: "sustainableDentalCare",
						value: "sustainableDentalCare",
					}}
					labelProps={{ htmlFor: "sustainableDentalCare" }}
					labelText="Sustainable Dental Care"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<p className="italic text-standard-balanced">Fashion</p>
				<Checkbox
					inputProps={{
						type: "checkbox",
						id: "sustainableClothing",
						name: "sustainableClothing",
						value: "sustainableClothing",
					}}
					labelProps={{ htmlFor: "sustainableClothing" }}
					labelText="Sustainable Clothing"
				/>
				<Checkbox
					inputProps={{
						type: "checkbox",
						id: "ethicalAccessories",
						name: "ethicalAccessories",
						value: "ethicalAccessories",
					}}
					labelProps={{ htmlFor: "ethicalAccessories" }}
					labelText="Ethical Accessories"
				/>
			</div>
		</section>
	);
};

export default BySubCategory;
