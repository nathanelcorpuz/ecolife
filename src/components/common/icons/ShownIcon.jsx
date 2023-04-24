import img from "../../../../public/assets/shown.png";
import Image from "next/image";

export default function ShownIcon({ width = 30, height = 30 }) {
	return <Image src={img} width={width} height={height} alt="shown icon" />;
}
