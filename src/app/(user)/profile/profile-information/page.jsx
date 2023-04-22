import Input from "@/components/common/inputs/Input";

export default function Page() {
	return (
		<main className="max-w-[600px] flex flex-col gap-5">
			<h1 className="text-4xl font-bold pb-4">Profile Information</h1>
			<Input label="Name" />
			<Input label="Email Address" />
			<Input label="Contact Number" />
		</main>
	);
}
