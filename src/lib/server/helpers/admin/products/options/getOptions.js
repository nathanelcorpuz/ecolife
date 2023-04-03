import Option from "@/lib/server/models/Option";

export default async function (req, res) {
	try {
		const options = await Option.find({ productId: req.query.productId });
		res.status(200).json(options);
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
