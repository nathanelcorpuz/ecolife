export default function Button({
	children,
	size = "sm",
	light = false,
	className = "",
	disabled = false,
	...props
}) {
	let disabledClass;

	if (disabled) {
		disabledClass = "opacity-50 cursor-not-allowed";
	}

	let variantClass;

	if (light) {
		variantClass =
			"bg-accent-light-100 text-accent-dark hover:bg-accent-light-300 transition-all";
	} else {
		variantClass =
			"bg-accent-dark text-accent-light hover:bg-accent-dark-300 transition-all";
	}

	let sizeClass;

	if (size === "sm") {
		sizeClass = "px-5 py-3 text-base";
	} else if (size === "md") {
		sizeClass = "px-7 py-4 text-base";
	} else if (size === "lg") {
		sizeClass = "px-8 py-4 text-lg";
	}

	return (
		<button
			className={`
        ${sizeClass}
				${variantClass}
				${className}
				${disabledClass}
        rounded font-bold
				`}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
}
