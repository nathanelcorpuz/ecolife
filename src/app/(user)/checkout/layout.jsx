import CheckoutProvider from "./_components/CheckoutProvider";
import CheckoutNav from "./_components/CheckoutNav";
import CheckoutLowerButtons from "./_components/CheckoutLowerButtons";

export default function Layout({ children }) {
	return (
		<main className="max-w-[1000px] m-auto pt-12 pb-36 flex flex-col gap-12">
			<CheckoutNav />
			<CheckoutProvider>{children}</CheckoutProvider>
			<CheckoutLowerButtons />
		</main>
	);
}
