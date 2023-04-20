export default function Layout({ children, modal }) {
	return (
		<main>
			{modal}
			{children}
		</main>
	);
}
