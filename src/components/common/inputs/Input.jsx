"use input";

const Input = ({ label = "Default label", labelLight, ...inputProps }) => {
	return (
		<div className="flex flex-col gap-1 w-full">
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
				placeholder={label}
				{...inputProps}
			/>
		</div>
	);
};

export default Input;
