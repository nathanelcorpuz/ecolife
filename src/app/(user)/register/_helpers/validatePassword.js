import PasswordValidator from "password-validator";

export default function validatePassword(password, confirmPassword) {
	const schema = new PasswordValidator();

	schema.is().min(8);
	schema.is().max(100);
	schema.has().uppercase();
	schema.has().lowercase();
	schema.has().digits();
	schema.has().symbols();
	schema.has().not().spaces();

	const errors = schema.validate(password, { list: true });

	const isEmpty = password === "" || confirmPassword === "";

	if (password !== confirmPassword && !isEmpty) {
		errors.push("mismatch");
	}

	if (password === confirmPassword && errors.includes("mismatch")) {
		errors.splice(errors.indexOf("mismatch"), 1);
	}

	if (errors.length === 0) {
		return { success: true, message: "Password is valid" };
	}

	return { success: false, errors };
}
