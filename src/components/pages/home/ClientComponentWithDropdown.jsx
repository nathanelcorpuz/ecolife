"use client";

import Dropdown from "@/components/common/inputs/dropdown/Dropdown";
import { useState } from "react";

const SampleComponentWithDropdown = () => {
	// null means there's no default value
	const [selectedOption, setSelectedOption] = useState("option-2");
	return (
		<Dropdown
			label="Sample dropdown"
			options={[
				{
					label: "Option 1",
					value: "option-1",
				},
				{
					label: "Option 2",
					value: "option-2",
				},
				{
					label: "Option 3",
					value: "option-3",
				},
			]}
			selectedOption={selectedOption}
			setSelectedOption={setSelectedOption}
		/>
	);
};

export default SampleComponentWithDropdown;
