import Button from "@/components/common/buttons/Button";
import Checkbox from "@/components/common/inputs/Checkbox";
import Input from "@/components/common/inputs/Input";
import Link from "next/link";

export default function Page() {
	return (
		<main className="max-w-[600px] m-auto py-16 flex flex-col gap-6">
			<h1 className="text-4xl font-bold text-accent-balanced">
				Welcome back! 🍃
			</h1>
			<Input label="Email" />
			<Input label="Password" type="password" />
			<div className="flex justify-between">
				<Checkbox label="Remember me" />
				<Link
					className="underline underline-offset-4 p-2 rounded w-[fit-content] text-accent-balanced hover:text-accent-dark-300 hover:bg-standard-light-200 transition-all"
					href="/forgot-password"
				>
					Forgot password
				</Link>
			</div>
			<Button size="lg">Login</Button>
			<Link
				className="underline underline-offset-4 p-2 rounded w-[fit-content] text-accent-balanced hover:text-accent-dark-300 hover:bg-standard-light-200 transition-all"
				href="/register"
			>
				Don't have an account? Register here!
			</Link>
		</main>
	);
}
