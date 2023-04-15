export default function CardContainer({ children, size }) {
	if (size === "sm") {
		return (
			<div className="w-[280px] grid gap-3 hover:scale-[1.02] pb-0 hover:shadow-lg cursor-pointer rounded transition-all duration-300 border border-standard-light-300">
				{children}
			</div>
		);
	}
	return (
		<div className="max-w-lg grid gap-3 hover:scale-[1.02] pb-0 hover:shadow-lg cursor-pointer rounded transition-all duration-300 border border-standard-light-300">
			{children}
		</div>
	);
}
