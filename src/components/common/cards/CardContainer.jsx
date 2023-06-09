"use client";

const CardContainer = ({ children, size, onClick }) => {
	if (size === "sm") {
		return (
			<div
				onClick={onClick}
				className="w-[280px] grid gap-3 hover:scale-[1.02] pb-0 hover:shadow-lg cursor-pointer rounded transition-all duration-300 border border-standard-light-200 hover:border-transparent"
			>
				{children}
			</div>
		);
	}
	return (
		<div
			onClick={onClick}
			className="max-w-lg grid gap-3 hover:scale-[1.02] pb-0 hover:shadow-lg cursor-pointer rounded transition-all duration-300 border border-standard-light-200 hover:border-transparent"
		>
			{children}
		</div>
	);
};

export default CardContainer;
