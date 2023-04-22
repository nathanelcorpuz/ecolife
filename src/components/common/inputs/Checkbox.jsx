const defaultInputProps = {
	type: "checkbox",
	id: "checkboxId1",
	name: "checkboxName1",
	value: "checkboxValue1",
};

const defaultLabelProps = {
	htmlFor: "checkboxId1",
};

export default function Checkbox({
	className = "",
	inputProps = defaultInputProps,
	labelProps = defaultLabelProps,
	label = "Default label text",
}) {
	return (
		<div className="flex gap-3 items-center">
			<input
				type="checkbox"
				className={`
				form-checkbox rounded text-accent-dark-100
		 		cursor-pointer
				transition-all
				border-accent-balanced p-3 hover:bg-standard-light-200
				${className}`}
				{...inputProps}
			/>
			{label ? (
				<label className="leading-none" {...labelProps}>
					{" "}
					{label}
				</label>
			) : null}
		</div>
	);
}
