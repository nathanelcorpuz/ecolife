import ProfileNav from "./_components/ProfileNav";

export default async function Layout({ children }) {
	const response = await fetch("http://localhost:3000/profile/api", {
		method: "GET",
		cache: "no-store",
	});

	return (
		<main className="max-w-[1400px] m-auto pt-12 pb-36 flex flex-col gap-12">
			<ProfileNav />
			{children}
		</main>
	);
}
