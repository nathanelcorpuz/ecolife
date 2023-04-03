import Option from "@/lib/server/models/Option";

export default async function (req, res) {
	try {
		const { optionId } = req.body;

		await Option.findByIdAndUpdate(optionId, { ...req.body.newOption });

		res.status(200).json("Edit success");
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
