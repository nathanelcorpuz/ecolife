import Image from "next/image";
import logo from "../../../public/assets/logo.png";

const Logo = () => {
	return (
		<div className="flex gap-4">
			<div>
				<Image src={logo} width={50} height="auto" />
			</div>
			<p className="italic font-bold text-accent-balanced text-2xl">EcoLife</p>
		</div>
	);
};

export default Logo;
