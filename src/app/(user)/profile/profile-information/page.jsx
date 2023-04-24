import Button from "@/components/common/buttons/Button";
import Input from "@/components/common/inputs/Input";

export default function Page() {
	return (
		<main className="w-[600px] flex flex-col gap-5 m-auto">
			<h1 className="text-4xl font-bold pb-4">Profile Information</h1>
			<Input label="Name" />
			<Input label="Email Address" />
			<Input label="Contact Number" />
			<Button size="lg">Save</Button>
		</main>
	);
}
