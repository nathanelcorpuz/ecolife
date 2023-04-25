"use client";

import Link from "next/link";
import Logo from "../../Logo";
import HeaderLink from "./HeaderLink";
import { useContext } from "react";
import { AuthContext } from "@/lib/client/context/AuthContext";

const Header = () => {
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

	const onLogout = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

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
					{isLoggedIn ? (
						<>
							<li>
								<HeaderLink onClick={onLogout} href="/logout">
									Logout
								</HeaderLink>
							</li>
						</>
					) : (
						<>
							<li>
								<HeaderLink href="/login">Login</HeaderLink>
							</li>
							<li>
								<HeaderLink href="/register">Register</HeaderLink>
							</li>
						</>
					)}
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
