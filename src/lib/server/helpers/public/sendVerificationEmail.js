import jwt from "jsonwebtoken";
import { transporter } from "../../services/mailer";

const SECRET = process.env.REGISTER_TOKEN_SECRET;
const EXPIRATION = +process.env.REGISTER_TOKEN_EXPIRATION_MINUTES;

export default async function (email) {
	const token = jwt.sign({ email }, SECRET, { expiresIn: EXPIRATION });

	const domain =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: process.env.NEXT_PUBLIC_APP_URL;

	const link = `${domain}/api/public/user/register/verify?token=${token}`;

	const mailOptions = {
		from: "EcoLife - (Portfolio Project by Nat)",
		to: email,
		subject: "Account Verification - EcoLife",
		html: `
			<p>Thank you for signing up!</p>
            <p>Please verify your account by clicking on this <strong><a href=${link}>link</a></strong>.</p>
			<p>This link <strong>expires in ${EXPIRATION} minutes</strong>.</p>
            <p>Please send an email to nathanelcorpuz@gmail.com if you encounter any problems.</p>
            <p>Cheers,</p>
            <p>Nat</p>
		`,
	};

	await transporter.sendMail(mailOptions);
}
