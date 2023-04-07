import nodemailer from "nodemailer";

const MAILER_EMAIL = process.env.MAILER_EMAIL;
const MAILER_PASS = process.env.MAILER_PASS;

export const transporter = nodemailer.createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: MAILER_EMAIL,
		pass: MAILER_PASS,
	},
});