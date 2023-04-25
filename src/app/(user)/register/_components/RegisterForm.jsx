"use client";

import Button from "@/components/common/buttons/Button";
import Checkbox from "@/components/common/inputs/Checkbox";
import Input from "@/components/common/inputs/Input";
import Link from "next/link";
import { useState } from "react";
import validatePassword from "../_helpers/validatePassword";
import PolicyLinks from "./PolicyLinks";
import PasswordValidation from "./PasswordValidation";
import PasswordInput from "./PasswordInput";
import RegisterSuccess from "./RegisterSuccess";

export default function RegisterForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [errors, setErrors] = useState([]);
	const [terms, setTerms] = useState(false);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const onEmailChange = (e) => setEmail(e.target.value);

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
		const passwordValidation = validatePassword(
			e.target.value,
			confirmPassword
		);
		setErrors(passwordValidation.errors || []);
	};

	const onConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
		const passwordValidation = validatePassword(password, e.target.value);
		setErrors(passwordValidation.errors || []);
	};

	if (success) {
		return <RegisterSuccess />;
	}

	return (
		<form
			className="flex flex-col gap-6"
			onSubmit={async (e) => {
				e.preventDefault();
				setLoading(true);
				const res = await fetch("/register/api", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				});
				const data = await res.json();
				if (data.success) {
					setSuccess(true);
				}
				setLoading(false);
			}}
		>
			<h1 className="text-4xl font-bold text-accent-balanced">Join us! 🌲</h1>
			<Input
				label="Email"
				type="email"
				value={email}
				onChange={onEmailChange}
			/>
			<PasswordInput
				label="Password"
				type={showPassword ? "text" : "password"}
				value={password}
				onChange={onPasswordChange}
				shown={showPassword}
				onShowClick={() => setShowPassword(!showPassword)}
			/>
			{errors.length === 0 ? null : <PasswordValidation errors={errors} />}
			<PasswordInput
				label="Confirm Password"
				type={showConfirmPassword ? "text" : "password"}
				value={confirmPassword}
				onChange={onConfirmPasswordChange}
				shown={showConfirmPassword}
				onShowClick={() => setShowConfirmPassword(!showConfirmPassword)}
			/>
			<Checkbox
				label="Checking this box means you agree to our terms and privacy policy"
				labelProps={{ className: "text-standard-balanced text-sm italic" }}
				className="p-[9px]"
				inputProps={{
					checked: terms,
					onChange: () => setTerms(!terms),
				}}
			/>
			<PolicyLinks />
			<Button
				size="lg"
				type="submit"
				disabled={
					errors.length > 0 ||
					password.length === 0 ||
					email.length === 0 ||
					confirmPassword.length === 0 ||
					!terms ||
					loading
				}
			>
				{loading ? "Loading..." : "Register"}
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
