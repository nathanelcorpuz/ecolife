"use input";

import { v4 as uuidv4 } from "uuid";

const Input = ({
	label = "Default label",
	labelLight,
	customId = "",
	...inputProps
}) => {
	const id = uuidv4();
	return (
		<div className="flex flex-col gap-1 w-full">
			<label
				className={`text-standard-balanced ${
					labelLight ? "text-standard-balanced-200" : "text-standard-dark-300"
				}`}
				htmlFor={customId || id}
			>
				{label}
			</label>
			<input
				type="text"
				className="rounded border-standard-light-200 px-3 py-3 focus:border-standard-balanced focus:ring-0 bg-transparent"
				id={customId || id}
				placeholder={label}
				{...inputProps}
			/>
		</div>
	);
};

export default Input;
