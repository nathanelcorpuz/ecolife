export default async function (req, res) {
	try {
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
}
