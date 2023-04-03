import Option from "@/lib/server/models/Option";

export default async function (req, res) {
	try {
		await Promise.all(
			req.query.optionIds.map(async (id) =>
				Option.findByIdAndUpdate(id, { isDeleted: true })
			)
		);
		res.status(200).json("delete success");
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
