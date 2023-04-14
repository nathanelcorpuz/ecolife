"use client";

import Link from "next/link";
import Button from "../buttons/Button";
import Input from "../inputs/Input";

const Newsletter = () => {
	return (
		<div className="py-16 bg-accent-dark flex flex-col gap-10 items-center">
			<div className="flex flex-col gap-4 text-center">
				<h2 className="text-4xl text-standard-light font-semibold">
					Join Our Eco-Friendly Community
				</h2>
				<p className="text-lg text-standard-light-300">
					Subscribe to our newsletter for exclusive offers, updates, and
					eco-friendly tips
				</p>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex gap-2 items-end">
					<Input
						label="Email"
						labelLight
						className="rounded bg-transparent focus:ring-0 focus:border-standard-light-300 py-[11px] text-standard-light w-[500px]"
					/>
					<Button light>Send</Button>
				</div>
				<p className="text-standard-light-300">
					We will never spam your inbox.
				</p>
				<div className="flex gap-5">
					<Link
						className="text-standard-balanced-300 underline-offset-4 underline text-sm hover:text-accent-light transition-all"
						href=""
					>
						Privacy
					</Link>
					<Link
						className="text-standard-balanced-300 underline-offset-4 underline text-sm hover:text-accent-light transition-all"
						href=""
					>
						Terms
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
