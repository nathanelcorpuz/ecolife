import styles from "./Carousel.module.css";

export default function CarouselControls({ activeSection, setActiveSection }) {
	return (
		<div className="flex gap-5">
			<button onClick={() => setActiveSection(0)}>1</button>
			<button onClick={() => setActiveSection(1)}>2</button>
			<button onClick={() => setActiveSection(2)}>3</button>
		</div>
	);
}
