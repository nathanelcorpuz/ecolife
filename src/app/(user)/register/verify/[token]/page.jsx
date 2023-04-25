"use client";

import Button from "@/components/common/buttons/Button";
import { AuthContext } from "@/lib/client/context/AuthContext";
import Link from "next/link";
import { useContext, useEffect } from "react";

export default function Page() {
	const { setIsLoggedIn } = useContext(AuthContext);
	// this route means the user has http only AT and RT in their cookies
	// how do I change the header ui to reflect this?
	// header UI should be logout minus login and register

	useEffect(() => {
		localStorage.setItem("isLoggedIn", true);
		setIsLoggedIn(true);
	}, [setIsLoggedIn]);

	return (
		<main className="flex flex-col items-center py-24">
			<p className="text-2xl text-center pb-8">
				You're now signed in. Thanks for verifying your account!
			</p>
			<Button>
				<Link href="/products">Continue shopping</Link>
			</Button>
		</main>
	);
}
