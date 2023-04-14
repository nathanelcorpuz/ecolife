"use client";

import Logo from "../../Logo";
import HeaderLink from "./HeaderLink";

const Header = () => {
	return (
		<header className="flex justify-center gap-48 p-5 items-center bg-accent-light">
			<Logo />
			<nav>
				<ul className="flex gap-8 items-center">
					<li>
						<HeaderLink href="">Home</HeaderLink>
					</li>
					<li>
						<HeaderLink href="">Products</HeaderLink>
					</li>
					<li>
						<HeaderLink href="">About</HeaderLink>
					</li>
					<li>
						<HeaderLink href="">Contact</HeaderLink>
					</li>
					<li>
						<HeaderLink href="">Blog</HeaderLink>
					</li>
				</ul>
			</nav>
			<nav>
				<ul className="flex gap-8 items-center">
					<li>
						<HeaderLink href="">Login</HeaderLink>
					</li>
					<li>
						<HeaderLink href="">Register</HeaderLink>
					</li>
					<li>
						<button className="px-4 py-2 text-lg bg-accent-balanced text-accent-light font-bold rounded ">
							Cart
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
