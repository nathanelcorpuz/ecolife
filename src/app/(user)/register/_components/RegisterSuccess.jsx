export default function RegisterSuccess() {
	return (
		<div className="flex flex-col gap-8 items-center">
			<h1 className="text-4xl text-accent-balanced font-bold">
				Thank you for signing up!
			</h1>
			<p>Please check your inbox for the verification email.</p>
			<p className="text-sm text-standard-balanced italic">
				You can now close this screen
			</p>
		</div>
	);
}
