import Button from "@/components/common/buttons/Button";
import Input from "@/components/common/inputs/Input";

export default function Page() {
	return (
		<main className="w-[600px] flex flex-col gap-5 m-auto">
			<h1 className="text-4xl font-bold pb-4">Change Password</h1>
			<Input label="Current Password" />
			<Input label="New Password" />
			<Input label="Confirm New Password" />
			<Button size="lg">Save</Button>
		</main>
	);
}
