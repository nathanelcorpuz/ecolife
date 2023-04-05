export default async function handler(req, res) {
	if (req.method !== "DELETE") {
		res.status(404).json({ errorMessage: "Request not found" });
		return;
	}

    const { ids } = req.query;
    
	const itemIds = ids.split(",");

	res.status(200).json({ deletedItems: itemIds });
}
