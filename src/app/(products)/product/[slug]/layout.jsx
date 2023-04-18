export default function Layout({ children, modal }) {
	return (
		<main>
			{children}
			{modal}
		</main>
	);
}
