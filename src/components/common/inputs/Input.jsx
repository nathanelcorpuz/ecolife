"use input";

import ShownIcon from "../icons/ShownIcon";

const Input = ({
	label = "Default label",
	labelLight,
	customId = "",
	...inputProps
}) => {
	return (
		<div className="flex flex-col gap-1 w-full">
			<label
				className={`text-standard-balanced ${
					labelLight ? "text-standard-balanced-200" : "text-standard-dark-300"
				}`}
				htmlFor={label}
			>
				{label}
			</label>
			<input
				type="text"
				className="rounded border-standard-light-200 px-3 py-3 focus:border-standard-balanced focus:ring-0 bg-transparent"
				id={label}
				placeholder={label}
				{...inputProps}
			/>
		</div>
	);
};

export default Input;
