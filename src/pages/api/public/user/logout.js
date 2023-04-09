import clearTokenPair from "@/lib/server/services/clearTokenPair";

export default function handler(req, res) {
	if (req.method !== "DELETE") {
		return res.status(405).json({ success: false });
	}

	try {
		clearTokenPair(res);
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false });
	}
}
