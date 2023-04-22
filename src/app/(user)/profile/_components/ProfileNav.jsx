import LayoutNav from "@/components/common/LayoutNav";

const routes = [
	{
		name: "Profile Information",
		href: "/profile/profile-information",
	},
	{
		name: "Shipping Information",
		href: "/profile/shipping-information",
	},
	{
		name: "Change Password",
		href: "/profile/change-password",
	},
	{
		name: "Order History",
		href: "/profile/order-history",
	},
];

export default function ProfileNav() {
	return <LayoutNav routes={routes} />;
}
