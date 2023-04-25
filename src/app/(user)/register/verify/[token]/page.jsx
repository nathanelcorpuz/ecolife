import Button from "@/components/common/buttons/Button";
import Link from "next/link";

export default function Page() {
	// this route means the user has http only AT and RT in their cookies
	// how do I change the header ui to reflect this?
	// header UI should be logout minus login and register
	return (
		<main className="flex flex-col items-center">
			<p className="text-2xl text-center p-24">
				You're now signed in. Thanks for verifying your account!
			</p>
			<Button>
				<Link href="/products">Continue shopping</Link>
			</Button>
		</main>
	);
}
