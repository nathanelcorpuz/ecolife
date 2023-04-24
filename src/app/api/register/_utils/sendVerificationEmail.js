import { transporter } from "@/lib/server/services/mailer";

const email = process.env.MAILER_EMAIL;

export default async function sendVerificationEmail(to, verificationLink) {
	try {
		const mailOptions = {
			from: email,
			to,
			subject: "Please verify your email",
			text: `Welcome! Please verify your email by clicking the following link: ${verificationLink}`,
			html: `
        <p>Welcome! Please verify your email by clicking the link below:</p>
        <a href="${verificationLink}">Verify Email</a>
      `,
		};

		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent: " + info.response);
	} catch (error) {
		console.error("Error sending email: " + error);
		throw new Error(error.message);
	}
}
