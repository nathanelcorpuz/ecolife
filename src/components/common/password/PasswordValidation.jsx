export default function PasswordValidation({ errors }) {
	// show all validation messages initially
	return (
		<div>
			{errors.map((error) => {
				switch (error) {
					case "min":
						return (
							<p key={error}>Password must be at least 8 characters long</p>
						);
					case "max":
						return (
							<p key={error}>Password must be less than 64 characters long</p>
						);
					case "uppercase":
						return (
							<p key={error}>
								Password must contain at least one uppercase letter
							</p>
						);
					case "lowercase":
						return (
							<p key={error}>
								Password must contain at least one lowercase letter
							</p>
						);
					case "digits":
						return <p key={error}>Password must contain at least one number</p>;
					case "symbols":
						return (
							<p key={error}>
								Password must contain at least one special character
							</p>
						);
					case "mismatch":
						return <p key={error}>Passwords must match</p>;
					default:
						return null;
				}
			})}
		</div>
	);
}
