"use client";

import { useState, useRef, useEffect } from "react";
import DropdownIcon from "./DropdownIcon";

const defaultOptions = [
	{
		value: "value1",
		label: "Value 1",
	},
	{
		value: "value2",
		label: "Value 2",
	},
	{
		value: "value3",
		label: "Value 3",
	},
	{
		value: "value4",
		label: "Value 4",
	},
];

const Dropdown = ({
	title = "Default title",
	options = defaultOptions,
	setValue,
	value,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleOptionClick = (value) => {
		setValue(value);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [dropdownRef]);

	return (
		<div
			className="flex flex-col gap-1 w-80 relative"
			onClick={() => setIsOpen(!isOpen)}
			ref={dropdownRef}
		>
			<p className="text-standard-balanced">{title}</p>
			<div className="flex justify-between p-3 rounded border border-standard-light-200 cursor-pointer">
				<p className={!value ? "text-standard-balanced" : "font-bold"}>
					{!value
						? "Select option"
						: options.find((option) => option.value === value).label}
				</p>
				<DropdownIcon />
			</div>
			<ul
				className="rounded px-2 py-4 absolute top-[110%] w-full border border-standard-light-300 z-10 bg-standard-light"
				style={{ display: isOpen ? "block" : "none" }}
			>
				{options.map((option) => (
					<li
						className="p-2 hover:bg-accent-light-200 rounded cursor-pointer"
						key={option.value}
						onClick={() => handleOptionClick(option.value)}
					>
						{option.label}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dropdown;
