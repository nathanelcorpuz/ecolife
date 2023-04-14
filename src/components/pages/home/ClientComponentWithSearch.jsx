"use client";

import SearchInput from "@/components/common/inputs/search-input/SearchInput";
import { useState } from "react";

const ClientComponentWithSearch = () => {
	const [search, setSearch] = useState("");
	return (
		<SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
	);
};

export default ClientComponentWithSearch;
