export default function Button2({ children, onClick }) {
	return (
		<button onClick={onClick} className="text-accent-balanced font-bold">
			{children}
		</button>
	);
}
