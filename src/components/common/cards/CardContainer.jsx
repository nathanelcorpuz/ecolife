export default function CardContainer({ children, size }) {
	if (size === "sm") {
		return <div className="w-[200px] grid gap-3">{children}</div>;
	}
	return <div className="max-w-lg grid gap-3">{children}</div>;
}
