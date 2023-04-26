"use client";

import Button from "@/components/common/buttons/Button";
import { AuthContext } from "@/lib/client/context/AuthContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Page({ params }) {
	const { token } = params;
	const { setIsLoggedIn } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	useEffect(() => {
		// handle verification request here
		// set httpOnly token through this process
		const verifyRegistrationToken = async () => {
			const response = await fetch("/register/api/verify", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: {
					token,
				},
			});

			const data = await response.json();

			if (data.success) {
				// http only cookies are set
				localStorage.setItem("isLoggedIn", true);
				setIsLoggedIn(true);
				setIsSuccess(true);
			} else {
				setIsError(true);
			}
			setIsLoading(false);
		};
	}, [setIsLoggedIn]);

	return (
		<main className="flex flex-col items-center py-24">
			{isLoading && (
				<p className="text-2xl text-center pb-8">
					Verifying your account, please wait...
				</p>
			)}
			{isError && (
				<p className="text-2xl text-center pb-8">
					Something went wrong, please contact support via support@ecolife.com
				</p>
			)}
			{isSuccess && (
				<>
					<p className="text-2xl text-center pb-8">
						You're now signed in. Thanks for verifying your account!
					</p>
					<Button>
						<Link href="/products">Continue shopping</Link>
					</Button>
				</>
			)}
		</main>
	);
}
