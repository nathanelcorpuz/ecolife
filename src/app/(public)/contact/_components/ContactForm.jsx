import Button from "@/components/common/buttons/Button";
import Input from "@/components/common/inputs/Input";
import FacebookIcon from "@/components/common/socials/FacebookIcon";
import InstagramIcon from "@/components/common/socials/InstagramIcon";
import TwitterIcon from "@/components/common/socials/TwitterIcon";

export default function ContactForm() {
	return (
		<section className="flex flex-col gap-16 pt-16 pb-36 items-center max-w-[1300px] m-auto">
			<h1 className="text-7xl font-bold">We'd love to hear from you!</h1>
			<div className="flex gap-16">
				<div className="flex flex-col gap-8 w-[30%]">
					<div className="flex flex-col gap-3">
						<p className="font-bold text-lg">Reach out to us</p>
						<p>
							Please fill out the contact form with your name, email address,
							and message. We strive to respond to all inquiries within 24-48
							hours. To help us better assist you, please include as much detail
							as possible in your message.
						</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-bold text-lg">In-Store Events and Promotions</p>
						<p>
							We invite you to visit our store in person to explore our full
							range of eco-friendly products and take advantage of exclusive
							in-store promotions.
						</p>
					</div>
				</div>
				<form className="flex flex-col gap-4 w-[40%]">
					<Input type="text" label="Name" />
					<Input type="email" label="Email" />
					<div className="flex flex-col text-standard-dark-300 gap-1">
						<label htmlFor="message">Message</label>
						<textarea
							placeholder="Message"
							rows={10}
							id="message"
							type="textarea"
							className="form-textarea focus:border-standard-balanced focus:ring-0 bg-transparent border-standard-light-200 rounded"
						/>
					</div>
					<Button size="lg">Submit</Button>
				</form>
				<div className="flex flex-col gap-3 w-[30%]">
					<p className="font-bold text-lg">Connect With Us on Social Media</p>
					<p>
						Stay up-to-date with the latest news, offers, and eco-friendly tips
						by following us on Facebook, Twitter, and Instagram. We regularly
						share information about new products, upcoming sales, and exclusive
						promotions, as well as engaging content to inspire and inform your
						sustainable lifestyle journey.
					</p>
					<div className="flex gap-4 items-center">
						<FacebookIcon />
						<TwitterIcon />
						<InstagramIcon />
					</div>
				</div>
			</div>
		</section>
	);
}
