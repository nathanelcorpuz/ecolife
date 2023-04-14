"use input";

const Input = ({
	label = "Default label",
	labelLight,
	customWidth = 96,
	...inputProps
}) => {
	return (
		<div className={`flex flex-col gap-1 w-${customWidth}`}>
			<label
				className={`font-bold ${
					labelLight ? "text-standard-balanced-200" : "text-standard-dark-300"
				}`}
			>
				{label}
			</label>
			<input
				type="text"
				className="rounded border-standard-light-300 px-3 py-2 focus:border-standard-light-300 focus:ring-0"
				{...inputProps}
			/>
		</div>
	);
};

export default Input;
