export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.status(404).json({ errorMessage: "Request not found" });
		return;
	}
	res.status(200).json({ body: req.body });
}
