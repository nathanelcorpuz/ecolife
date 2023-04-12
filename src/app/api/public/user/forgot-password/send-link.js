import jwt from "jsonwebtoken";
import { transporter } from "@/lib/server/services/mailer";
import ProfileInfo from "@/lib/server/models/ProfileInfo";

const SECRET = process.env.FORGOT_PASSWORD_SECRET;
const EXPIRATION = +process.env.FORGOT_PASSWORD_EXPIRATION_MINUTES;

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ success: false });
	}

	try {
		const { email } = req.body;

		const profileInfo = await ProfileInfo.findOne({ email });

		if (!profileInfo) throw new Error("Email not found");

		const token = jwt.sign({ email }, SECRET, {
			expiresIn: EXPIRATION * 60,
		});

		const domain =
			process.env.NODE_ENV === "development"
				? "http://localhost:3000"
				: process.env.NEXT_PUBLIC_APP_URL;

		const link = `${domain}/api/public/user/forgot-password/confirm-link?token=${token}`;

		const mailOptions = {
			from: "EcoLife - (Portfolio Project by Nat)",
			to: email,
			subject: "Forgot Password - EcoLife",
			html: `
            <p>A password reset request has been made for your account.</p>
			<p>If you did not make this request, please ignore this email.</p>
			<p>Please update your password by clicking on this <strong><a href=${link}>link</a></strong>.</p>
			<p>This link <strong>expires in ${EXPIRATION} minutes</strong>.</p>
            <p>Please send an email to nathanelcorpuz@gmail.com if you encounter any problems.</p>
            <p>Regards,</p>
            <p>Nat from EcoLife</p>
		`,
		};

		await transporter.sendMail(mailOptions);

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false });
	}
}
