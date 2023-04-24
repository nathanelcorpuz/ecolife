import Button from "@/components/common/buttons/Button";
import Input from "@/components/common/inputs/Input";

export default function Page() {
	return (
		<main className="w-[600px] m-auto flex flex-col pt-12 pb-36 gap-8">
			<h1 className="text-4xl">Forgot Password</h1>
			<Input type="password" label="New Password" />
			<Input type="password" label="Confirm New Password" />
			<Button size="lg">Change Password</Button>
		</main>
	);
}
