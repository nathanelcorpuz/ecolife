export default function CustomButton({ children, size = "sm", light = false }) {
	let variantClass;

	if (light) {
		variantClass = "bg-accent-light-100 text-accent-dark";
	} else {
		variantClass = "bg-accent-dark text-accent-light-100";
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
        rounded font-bold`}
		>
			{children}
		</button>
	);
}
