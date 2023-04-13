import styles from "./Carousel.module.css";

export default function CarouselControls({ activeSection, setActiveSection }) {
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
			<div className="flex gap-5">
				<button onClick={() => setActiveSection(0)}>1</button>
				<button onClick={() => setActiveSection(1)}>2</button>
				<button onClick={() => setActiveSection(2)}>3</button>
			</div>
		</>
	);
}
