import connectMongo from "@/lib/server/services/connectMongo";
import Product from "@/lib/server/models/Product";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		res.status(405).json({ message: "Method not allowed" });
	}

	try {
		await connectMongo();

		const { searchKey } = req.query;

		if (!searchKey) {
			return res
				.status(400)
				.json({ message: "Missing query parameter 'searchKey'" });
		}

		const regex = new RegExp(searchKey, "i"); // case-insensitive search regex

		const products = await Product.find({ title: regex });

		res.status(200).json({ products });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
}
