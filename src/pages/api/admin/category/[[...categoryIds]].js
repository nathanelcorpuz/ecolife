export default async function handler(req, res) {
	if (req.method === "POST") {
		res.status(200).json({ body: req.body });
		return;
	}
	if (req.method === "GET") {
		res.status(200).json({ query: req.query });
		return;
	}
	if (req.method === "PUT") {
		res.status(200).json({ query: req.query, body: req.body });
		return;
	}
	if (req.method === "DELETE") {
		res.status(200).json({ query: req.query });
		return;
	}
	res.status(200).json({ success: true });
}
