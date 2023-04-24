import Button from "@/components/common/buttons/Button";

export default function OrderHistoryItem() {
	return (
		<tr className="border-b border-b-standard-light-200">
			<td className="py-8">1</td>
			<td className="py-8">Jan 1, 2020</td>
			<td className="py-8">₱1,550.00</td>
			<td className="py-8">Completed</td>
			<td className="py-8">
				<Button>View more</Button>
			</td>
		</tr>
	);
}
