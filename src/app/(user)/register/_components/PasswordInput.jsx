"use input";

import HiddenIcon from "@/components/common/icons/HiddenIcon";
import ShownIcon from "@/components/common/icons/ShownIcon";

export default function PasswordInput({
	label = "Default label",
	labelLight,
	customId = "",
	shown = false,
	type = "password",
	onShowClick = () => {},
	...inputProps
}) {
	return (
		<div className="flex flex-col gap-1 w-full">
			<label
				className={`text-standard-balanced ${
					labelLight ? "text-standard-balanced-200" : "text-standard-dark-300"
				}`}
				htmlFor={label}
			>
				{label}
			</label>
			<div className="w-full relative">
				<input
					type={type}
					className="rounded border-standard-light-200 px-3 py-3 pe-16 focus:border-standard-balanced focus:ring-0 bg-transparent w-full"
					id={label}
					placeholder={label}
					{...inputProps}
				/>
				<div
					className="absolute top-0 bottom-0 flex items-center hover:bg-standard-light-300 right-0 px-4 cursor-pointer rounded-br rounded-tr"
					onClick={onShowClick}
				>
					{!shown ? <HiddenIcon /> : <ShownIcon />}
				</div>
			</div>
		</div>
	);
}
