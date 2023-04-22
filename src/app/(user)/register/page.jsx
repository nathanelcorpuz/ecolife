import Button from "@/components/common/buttons/Button";
import Checkbox from "@/components/common/inputs/Checkbox";
import Input from "@/components/common/inputs/Input";
import Link from "next/link";

export default function Page() {
	return (
		<main className="max-w-[600px] m-auto py-16 flex flex-col gap-6">
			<h1 className="text-4xl font-bold text-accent-balanced">Join us! 🌲</h1>
			<Input label="Email" />
			<Input label="Password" type="password" />
			<Input label="Confirm Password" type="password" />
			<Checkbox label="Checking this box means you agree to our terms and privacy policy" />
			<div className="flex gap-5">
				<Link
					className="underline underline-offset-4 text-accent-balanced p-2 rounded w-[fit-content]  hover:text-accent-dark-300 hover:bg-standard-light-200 transition-all"
					href="/"
				>
					Terms
				</Link>
				<Link
					className="underline underline-offset-4 text-accent-balanced p-2 rounded w-[fit-content]  hover:text-accent-dark-300 hover:bg-standard-light-200 transition-all"
					href="/"
				>
					Privacy
				</Link>
			</div>
			<Button size="lg">Register</Button>
			<Link
				className="underline underline-offset-4 text-accent-balanced p-2 rounded w-[fit-content]  hover:text-accent-dark-300 hover:bg-standard-light-200 transition-all"
				href="/login"
			>
				Already have an account? Login here!
			</Link>
		</main>
	);
}
