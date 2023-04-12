import "./globals.css";

import BlogPreview from "@/components/common/blogPreview";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Newsletter from "@/components/common/newsletter";

export const metadata = {
	title: "Home",
	description: "This is a sample description",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
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
