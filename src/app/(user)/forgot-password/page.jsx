import Button from "@/components/common/buttons/Button";
import Button2 from "@/components/common/buttons/Button2";
import Input from "@/components/common/inputs/Input";

export default function Page() {
	return (
		<main className="w-[600px] m-auto flex flex-col pt-12 pb-36 gap-8">
			<h1 className="text-4xl">Forgot Password</h1>
			<Input type="text" label="Email" />
			<Button size="lg">Send Reset Link</Button>
			<Button2>Remember your password? Log in here!</Button2>
		</main>
	);
}
