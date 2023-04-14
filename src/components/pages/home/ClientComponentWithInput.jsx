"use client";

import Input from "@/components/common/inputs/Input";
import { useState } from "react";

const ClientComponentWithInput = () => {
	const [value, setValue] = useState("");
	return (
		<Input
			value={value}
			onChange={(e) => setValue(e.target.value)}
			label="Sample label"
		/>
	);
};

export default ClientComponentWithInput;
