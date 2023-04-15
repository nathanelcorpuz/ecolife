"use client";

import ProductCard from "@/components/common/cards/ProductCard";
import NextIcon from "@/components/common/hero-layouts/NextIcon";
import PrevIcon from "@/components/common/hero-layouts/PrevIcon";
import { useState } from "react";

const ProductTiles = () => {
	const [activePage, setActivePage] = useState(1);

	const activeClass =
		"bg-accent-dark text-accent-light flex justify-center items-center rounded w-[40px] h-[40px] font-bold";

	// sample API response
	const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
	const totalPages = 15;
	const lastPage = totalPages;

	const paginationElements = [1, 2, 3, 4, 5, "...", totalPages];
	/*
        MUI-based pagination logic
        - always show first page
        - if active page > 5, show first and last dots
        - if active page + 3 === totalPages, keep only first dots
        - always show last page        
    */

	const nearEnd = activePage >= lastPage - 3 && activePage <= lastPage;

	if (activePage >= 5 && !nearEnd) {
		paginationElements.splice(1, 1, "...");
		paginationElements.splice(2, 1, activePage - 1);
		paginationElements.splice(3, 1, activePage);
		paginationElements.splice(4, 1, activePage + 1);
	}

	if (nearEnd) {
		paginationElements.splice(1, 1, "...");
		paginationElements.splice(2, 1, lastPage - 4);
		paginationElements.splice(3, 1, lastPage - 3);
		paginationElements.splice(4, 1, lastPage - 2);
		paginationElements.splice(5, 1, lastPage - 1);
	}

	return (
		<section className="flex flex-col gap-24 items-center">
			<div className="flex flex-wrap gap-6">
				{products.map((product) => (
					<ProductCard key={product.id} size="sm" />
				))}
			</div>
			<div className="w-[400px] flex justify-center gap-4">
				<div className="w-[50px] h-[50px]">
					<button
						className={
							activePage === 1
								? "hidden"
								: "p-2 hover:bg-accent-light-300 rounded transition-all"
						}
						onClick={() => setActivePage((prev) => prev - 1)}
					>
						<PrevIcon />
					</button>
				</div>
				<div className="flex items-center">
					{paginationElements.map((element) => {
						if (activePage === element) {
							return <button className={activeClass}>{element}</button>;
						}
						if (element === "...") {
							return (
								<div className="w-[40px] h-[40px] grid place-content-center">
									<p>...</p>
								</div>
							);
						}
						return (
							<button
								className="font-bold w-[40px] h-[40px] rounded hover:bg-accent-light-300 transition-all"
								onClick={() => setActivePage(element)}
							>
								{element}
							</button>
						);
					})}
				</div>
				<div className="w-[50px] h-[50px]">
					<button
						className={
							activePage === totalPages
								? "hidden"
								: "p-2 hover:bg-accent-light-300 rounded transition-all"
						}
						onClick={() => setActivePage((prev) => prev + 1)}
					>
						<NextIcon />
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProductTiles;
