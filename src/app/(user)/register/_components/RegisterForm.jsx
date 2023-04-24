"use client";

import Button from "@/components/common/buttons/Button";
import Checkbox from "@/components/common/inputs/Checkbox";
import Input from "@/components/common/inputs/Input";
import Link from "next/link";

export default function RegisterForm() {
	return (
		<form
			className="flex flex-col gap-6"
			onSubmit={async (e) => {
				e.preventDefault();
				console.log("submitted");
				const res = await fetch("/api/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: "test@email.com",
						password: "password",
					}),
				});
				const data = await res.json();
				console.log(data);
			}}
		>
			<Input label="Email" type="email" />
			<Input label="Password" type="password" />
			<Input label="Confirm Password" type="password" />
			<Checkbox
				label="Checking this box means you agree to our terms and privacy policy"
				labelProps={{ className: "text-standard-balanced text-sm italic" }}
				className="p-[9px]"
			/>
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
			<Button size="lg" type="submit">
				Register
			</Button>
			<Link
				className="underline underline-offset-4 text-accent-balanced p-2 rounded w-[fit-content]  hover:text-accent-dark-300 hover:bg-standard-light-200 transition-all"
				href="/login"
			>
				Already have an account? Login here!
			</Link>
		</form>
	);
}
