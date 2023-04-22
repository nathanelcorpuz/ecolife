export default function Button2({ children, onClick, className }) {
	return (
		<button
			onClick={onClick}
			className={`text-accent-balanced font-bold ${className}`}
		>
			{children}
		</button>
	);
}
