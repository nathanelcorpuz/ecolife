export default function PrevNextBtns({ activeSection, setActiveSection }) {
	const prevClick = () => {
		if (activeSection === 0) return;
		setActiveSection((prev) => prev - 1);
	};

	const nextClick = () => {
		if (activeSection === 2) return;
		setActiveSection((prev) => prev + 1);
	};

	return (
		<>
			<div className="absolute left-10 bottom-1/2">
				<button
					className={`${activeSection === 0 ? "hidden" : ""}`}
					onClick={prevClick}
				>
					Prev
				</button>
			</div>
			<div className="absolute right-10 bottom-1/2">
				<button
					className={`${activeSection === 2 ? "hidden" : ""}`}
					onClick={nextClick}
				>
					Next
				</button>
			</div>
		</>
	);
}
