import Button from "@/components/common/buttons/Button";
import Input from "@/components/common/inputs/Input";
import Dropdown from "@/components/common/inputs/dropdown/Dropdown";
import SearchInput from "@/components/common/inputs/search-input/SearchInput";
import OrderHistoryItem from "./_components/OrderHistoryItem";

const items = [{ sample: 1 }, { sample: 2 }, { sample: 3 }, { sample: 4 }];

export default function Page() {
	return (
		<main className="w-[100%] flex flex-col gap-5 m-auto">
			<h1 className="text-4xl font-bold pb-4">Order History</h1>
			<div className="flex gap-24">
				<div className="flex flex-col w-[400px] gap-4">
					<SearchInput />
					<div className="flex gap-4">
						<Input label="From" type="date" />
						<Input label="To" type="date" />
					</div>
				</div>
				<div className="w-[100%]">
					<table className="w-[100%]">
						<thead>
							<tr className="border-b border-b-standard-light-200">
								<th className="text-start pb-8">Order ID</th>
								<th className="text-start pb-8">Date Ordered</th>
								<th className="text-start pb-8">Amount</th>
								<th className="text-start pb-8">Status</th>
							</tr>
						</thead>
						<tbody>
							{items.map((item, index) => (
								<OrderHistoryItem key={item.sample} />
							))}
						</tbody>
					</table>
					<div className="pt-8">
						<Button>
							Load more
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
