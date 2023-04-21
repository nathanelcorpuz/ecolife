export default function PlusIcon({ color = "#202020", scale = "scale-[2]", className }) {
	return (
		<svg
			width="11"
			height="11"
			viewBox="0 0 11 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${scale} ${className}`}
		>
			<path d="M5.31383 1.03974L5.30267 9.55102Z" fill="white" />
			<path
				d="M5.31383 1.03974L5.30267 9.55102"
				stroke={color}
				stroke-width="1.2159"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path d="M1.03974 5.29538H9.55102Z" fill="white" />
			<path
				d="M1.03974 5.29538H9.55102"
				stroke={color}
				stroke-width="1.2159"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
