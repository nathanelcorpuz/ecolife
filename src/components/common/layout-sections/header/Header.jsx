"use client";

import Link from "next/link";
import Logo from "../../Logo";
import HeaderLink from "./HeaderLink";

const Header = () => {
	/*
		This component should detect if the user is authenticated via
		- registration verification middleware result (if the user has a valid http-only AT and RT in their cookies)
		- login middleware result (if the user has a valid http-only AT and RT in their cookies)


		notes
		- maybe in root layout?
	*/
	return (
		<header className="flex justify-center gap-48 p-5 items-center bg-accent-light">
			<div className="w-[30%] flex justify-end">
				<Link href="/">
					<Logo />
				</Link>
			</div>
			<nav className="w-[40%]">
				<ul className="flex gap-8 items-center justify-center">
					<li>
						<HeaderLink href="/products">Products</HeaderLink>
					</li>
					<li>
						<HeaderLink href="/about">About</HeaderLink>
					</li>
					<li>
						<HeaderLink href="/contact">Contact</HeaderLink>
					</li>
					<li>
						<HeaderLink href="/blog">Blog</HeaderLink>
					</li>
					<li>
						<HeaderLink href="/login">Login</HeaderLink>
					</li>
					<li>
						<HeaderLink href="/register">Register</HeaderLink>
					</li>
				</ul>
			</nav>
			<nav className="w-[30%]">
				<ul className="flex gap-8 justify-start items-center">
					<li>
						<button className="px-4 py-2 text-lg bg-accent-balanced text-accent-light font-bold rounded hover:bg-accent-balanced-300 transition-all">
							<Link href="/cart">Cart</Link>
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
