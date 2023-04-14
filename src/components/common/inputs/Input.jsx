"use input";

const Input = ({ label = "Default label", ...inputProps }) => {
	return (
		<div className="flex flex-col gap-1 w-80">
			<label>{label}</label>
			<input
				type="text"
				className="rounded border-standard-light-300 px-3 py-2 focus:border-standard-light-300 focus:ring-0"
				{...inputProps}
			/>
		</div>
	);
};

export default Input;
