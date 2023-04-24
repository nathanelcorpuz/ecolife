import locationIcon from "../../../../../public/assets/location-icon.png";
import mapsImg from "../../../../../public/assets/contact-maps.png";
import Image from "next/image";

export default function ContactMaps() {
	return (
		<section className="flex bg-accent-dark">
			<div className="w-[50%] relative">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1657.505539996559!2d-117.92015437497895!3d33.81202714501681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland%20Park!5e0!3m2!1sen!2sph!4v1682313262149!5m2!1sen!2sph"
					width="100%"
					height="550"
					allowfullscreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
			<div className="w-[50%] flex flex-col gap-8 p-24 text-standard-light">
				<h1 className="text-5xl font-bold">Visit Our Store</h1>
				<div className="flex gap-4 items-center">
					<Image src={locationIcon} width={20} height={20} alt="icon" />
					<p>123 Green Street, EcoCity, EC 12345</p>
				</div>
				<div className="flex gap-8">
					<div className="flex flex-col gap-4 w-[20%]">
						<div className="flex flex-col gap-1">
							<p className="font-bold">Monday - Friday</p>
							<p className="italic text-standard-light-300">10:00 AM - 7:00 PM</p>
						</div>
						<div className="flex flex-col gap-1">
							<p className="font-bold">Saturday</p>
							<p className="italic text-standard-light-300">11:00 AM - 6:00 PM</p>
						</div>
						<div className="flex flex-col gap-1">
							<p className="font-bold">Sunday</p>
							<p className="italic text-standard-light-300">Closed</p>
						</div>
					</div>
					<div className="flex flex-col gap-1 w-[50%]">
						<p className="font-bold">Holiday Closures</p>
						<p className="italic text-standard-light-300">
							Please note that we will be closed on major holidays, including
							New Year's Day, Independence Day, Thanksgiving, and Christmas Day.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
