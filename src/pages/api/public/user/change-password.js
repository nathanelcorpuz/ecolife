import verifyAccessToken from "@/lib/server/services/verifyAccessToken";

export default async function handler(req, res) {
	if (req.method !== "PUT") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	try {
		const verification = verifyAccessToken(req);
		if (!verification) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const { password, newPassword } = req.body;
		// WIP
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}
