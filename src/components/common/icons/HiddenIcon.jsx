import img from "../../../../public/assets/hidden.png";
import Image from "next/image";

export default function HiddenIcon({ width, height }) {
	return <Image src={img} width={width} height={height} alt="hidden icon" />;
}
