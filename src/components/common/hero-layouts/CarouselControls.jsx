import styles from "./Carousel.module.css";
import NextIcon from "./NextIcon";
import PrevIcon from "./PrevIcon";

export default function CarouselControls({
	activeSection,
	setActiveSection = () => {},
}) {
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
					<PrevIcon />
				</button>
			</div>
			<div className="absolute right-10 bottom-1/2">
				<button
					className={`${activeSection === 2 ? "hidden" : ""}`}
					onClick={nextClick}
				>
					<NextIcon />
				</button>
			</div>
			<div className="flex gap-5">
				<button
					onClick={() => setActiveSection(0)}
					className={`${styles.indicator} ${
						activeSection === 0 ? styles.active : ""
					}`}
					aria-label="image section 1"
				/>
				<button
					onClick={() => setActiveSection(1)}
					className={`${styles.indicator} ${
						activeSection === 1 ? styles.active : ""
					}`}
					aria-label="image section 2"
				/>
				<button
					onClick={() => setActiveSection(2)}
					className={`${styles.indicator} ${
						activeSection === 2 ? styles.active : ""
					}`}
					aria-label="image section 3"
				/>
			</div>
		</>
	);
}
