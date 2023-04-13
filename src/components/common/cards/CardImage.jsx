import Image from "next/image";

export default function CardImage({ src }) {
	return (
		<div className="w-auto h-40 relative overflow-hidden">
			<Image
				className="object-cover object-center"
				src={src}
				fill
				alt="test alt"
			/>
		</div>
	);
}
