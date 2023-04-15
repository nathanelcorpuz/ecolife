import Image from "next/image";

export default function CardImage({ src, size }) {
	if (size === "sm") {
		return (
			<div className="w-auto h-[230px] relative overflow-hidden">
				<Image
					className="object-cover object-center"
					src={src}
					fill
					alt="test alt"
				/>
			</div>
		);
	}
	return (
		<div className="w-auto h-80 relative overflow-hidden">
			<Image
				className="object-cover object-center"
				src={src}
				fill
				alt="test alt"
			/>
		</div>
	);
}
