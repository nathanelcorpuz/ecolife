export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}
	try {
		// send contact form API
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}
