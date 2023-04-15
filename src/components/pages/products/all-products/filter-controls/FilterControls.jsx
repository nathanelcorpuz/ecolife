"use client";

import SearchInput from "@/components/common/inputs/search-input/SearchInput";
import ByCategory from "./ByCategory";
import BySubCategory from "./BySubCategory";

const FilterControls = () => {
	return (
		<section className="flex flex-col gap-12">
			<div>
				<SearchInput />
			</div>
			<div className="flex flex-col gap-8">
				<ByCategory />
				<BySubCategory />
			</div>
		</section>
	);
};

export default FilterControls;
