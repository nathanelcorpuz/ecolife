import { v4 as uuidv4 } from "uuid";

const light = "#FFF7EB";
const dark = "#12370E";

export default function Star({ fillPercentage, isLight }) {
	const clipPathId = uuidv4();
	const clipPathWidth = (36 * fillPercentage) / 100;

	return (
		<svg
			width="36"
			height="33"
			viewBox="0 0 36 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="scale-[0.7] -m-[2px]"
		>
			<defs>
				<clipPath id={clipPathId}>
					<rect x="0" y="0" width={clipPathWidth} height="33" />
				</clipPath>
			</defs>
			<path
				d="M18 0L22.0413 12.4377H35.119L24.5389 20.1246L28.5801 32.5623L18 24.8754L7.41987 32.5623L11.4611 20.1246L0.880983 12.4377H13.9587L18 0Z"
				fill={isLight ? light : dark}
				clipPath={`url(#${clipPathId})`}
			/>
			<path
				d="M18 0L22.0413 12.4377H35.119L24.5389 20.1246L28.5801 32.5623L18 24.8754L7.41987 32.5623L11.4611 20.1246L0.880983 12.4377H13.9587L18 0Z"
				fill="none"
				stroke={isLight ? light : dark}
				strokeWidth="1"
			/>
		</svg>
	);
}
