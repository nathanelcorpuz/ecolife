import { transporter } from "@/lib/server/services/mailer";
import jwt from "jsonwebtoken";

const fromEmail = process.env.MAILER_EMAIL;
const secret = process.env.REGISTER_TOKEN_SECRET;
const expiration = +process.env.REGISTER_TOKEN_EXPIRATION_MINUTES * 60;

export default async function sendVerificationEmail(toEmail) {
	const token = jwt.sign({ email: toEmail }, secret, { expiresIn: expiration });

	const link = `http://localhost:3000/register/verify/${token}`;

	try {
		const mailOptions = {
			from: fromEmail,
			to: toEmail,
			subject: "Please verify your email",
			text: `Welcome! Please verify your email by clicking the following link: ${link}`,
			html: `
        <p>Welcome! Please verify your email by clicking the link below:</p>
        <a href="${link}">Verify Email</a>
      `,
		};

		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent: " + info.response);
	} catch (error) {
		console.error("Error sending email: " + error);
		throw new Error(error.message);
	}
}
