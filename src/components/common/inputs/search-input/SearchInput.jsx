import SearchIcon from "./SearchIcon";

const SearchInput = (inputProps) => {
	return (
		<div className="flex w-full rounded border border-standard-light-300">
			<input
				className="w-full rounded border-none focus:ring-0"
				type="text"
				placeholder="Search"
				{...inputProps}
			/>
			<button className="p-2 bg-standard-light-300 hover:bg-standard-light-200 transition-all">
				<SearchIcon />
			</button>
		</div>
	);
};

export default SearchInput;
