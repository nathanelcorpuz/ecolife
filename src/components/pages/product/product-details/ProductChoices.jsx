"use client";

import Dropdown from "@/components/common/inputs/dropdown/Dropdown";

// generates dropdown states based on choices array dynamically

export default function ProductChoices({
	fetchedChoices,
	choices,
	setChoices,
}) {
	return fetchedChoices.map((choice) => {
		const setValue = (value) => {
			setChoices((prev) => {
				return {
					...prev,
					[choice.title]: value,
				};
			});
		};
		return (
			<Dropdown
				key={choice.title}
				options={choice.options}
				title={choice.title}
				value={choices[choice.title]}
				setValue={setValue}
			/>
		);
	});
}
