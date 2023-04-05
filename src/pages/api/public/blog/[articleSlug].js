export default async function handler(req, res) {
	res.status(200).json({ query: req.query });
}
