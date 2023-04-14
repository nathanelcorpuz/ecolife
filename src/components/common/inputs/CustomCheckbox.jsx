const defaultInputProps = {
	type: "checkbox",
	id: "checkboxId1",
	name: "checkboxName1",
	value: "checkboxValue1",
};

const defaultLabelProps = {
	htmlFor: "checkboxId1",
};

export default function CustomCheckbox({
	inputProps = defaultInputProps,
	labelProps = defaultLabelProps,
	labelText = "Default label text",
}) {
	return (
		<div className="flex gap-3 items-center">
			<input
				className="
				form-checkbox rounded text-accent-dark-100
		 		cursor-pointer
				transition-all
				p-2
				"
				{...inputProps}
			/>
			<label className="leading-none" {...labelProps}> {labelText}</label>
		</div>
	);
}
