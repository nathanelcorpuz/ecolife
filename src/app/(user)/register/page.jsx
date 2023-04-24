import RegisterForm from "./_components/RegisterForm";

export default function Page() {
	return (
		<main className="max-w-[600px] m-auto py-16 flex flex-col gap-6">
			<h1 className="text-4xl font-bold text-accent-balanced">Join us! 🌲</h1>
			<RegisterForm />
		</main>
	);
}
