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
	label = "Default label",
	options = defaultOptions,
	selectedOption,
	setSelectedOption,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleOptionClick = (value) => {
		setSelectedOption(value);
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
			<p>{label}</p>
			<div className="flex justify-between p-3 rounded border border-standard-light-300 cursor-pointer">
				<p className={!selectedOption ? "text-standard-balanced" : ""}>
					{!selectedOption
						? "Select option"
						: options.find((option) => option.value === selectedOption).label}
				</p>
				<DropdownIcon />
			</div>
			<ul
				className="rounded px-2 py-4 absolute top-[110%] w-full border border-standard-light-300"
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
