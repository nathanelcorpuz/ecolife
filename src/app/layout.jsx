import "./globals.css";

import { Lato } from "next/font/google";

import BlogPreview from "@/components/common/layout-sections/BlogInvite";
import Footer from "@/components/common/layout-sections/footer/Footer";
import Header from "@/components/common/layout-sections/header/Header";
import Newsletter from "@/components/common/layout-sections/Newsletter";
import Announcement from "@/components/common/layout-sections/Announcement";
import AuthProvider from "@/lib/client/context/AuthContext";

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
			<body className="bg-standard-light">
				<AuthProvider>
					<Header />
					<Announcement />
					{children}
					<BlogPreview />
					<Newsletter />
					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
