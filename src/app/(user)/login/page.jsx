"use client";

import Button from "@/components/common/buttons/Button";
import Checkbox from "@/components/common/inputs/Checkbox";
import Input from "@/components/common/inputs/Input";
import PasswordInput from "@/components/common/password/PasswordInput";
import { AuthContext } from "@/lib/client/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Page() {
	const router = useRouter();
	const { setIsLoggedIn } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const onLogin = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		// const response = await fetch("/api/auth/login", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({ email, password }),
		// 	cache: "no-store",
		// });

		// const data = await response.json();

		// if (data.success) {
		// 	localStorage.setItem("isLoggedIn", true);
		// 	setIsLoggedIn(true);
		// 	router.push("/");
		// } else {
		// 	alert(data.message);
		// }
	};

	useEffect(() => {
		setIsLoggedIn(false);
	}, []);

	const onEmailChange = (e) => setEmail(e.target.value);
	const onPasswordChange = (e) => setPassword(e.target.value);

	return (
		<main className="max-w-[600px] m-auto py-16 flex flex-col gap-6">
			<h1 className="text-4xl font-bold text-accent-balanced">
				Welcome back! 🍃
			</h1>
			<form onSubmit={onLogin} className="flex flex-col gap-6">
				<Input label="Email" value={email} onChange={onEmailChange} />
				<PasswordInput
					label="Password"
					type={showPassword ? "text" : "password"}
					onChange={onPasswordChange}
					value={password}
					shown={showPassword}
					onShowClick={() => setShowPassword(!showPassword)}
				/>
				<div className="flex justify-between">
					<Checkbox label="Remember me" />
					<Link
						className="underline underline-offset-4 p-2 rounded w-[fit-content] text-accent-balanced hover:text-accent-dark-300 hover:bg-standard-light-200 transition-all"
						href="/forgot-password"
					>
						Forgot password
					</Link>
				</div>
				<Button size="lg" type="submit" disabled={isLoading}>
					Login
				</Button>
				<Link
					className="underline underline-offset-4 p-2 rounded w-[fit-content] text-accent-balanced hover:text-accent-dark-300 hover:bg-standard-light-200 transition-all"
					href="/register"
				>
					Don't have an account? Register here!
				</Link>
			</form>
		</main>
	);
}
