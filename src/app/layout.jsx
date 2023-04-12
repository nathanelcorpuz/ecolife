import "./globals.css";

import { Lato } from "next/font/google";

import BlogPreview from "@/components/common/blogPreview";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Newsletter from "@/components/common/newsletter";

const lato = Lato({
	variable: "--font-lato",
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
	title: "Home",
	description: "This is a sample description",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={lato.variable}>
			<body>
				<Header />
				{children}
				<BlogPreview />
				<Newsletter />
				<Footer />
			</body>
		</html>
	);
}
