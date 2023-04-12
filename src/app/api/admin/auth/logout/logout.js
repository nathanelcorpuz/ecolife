import clearAdminAccessToken from "@/lib/server/services/clearAdminAccessToken";

export default async function handler(req, res) {
    if (req.method !== "DELETE") {
        res.status(405).json({ message: "Method not allowed" });
        return;
    }

    try {
        clearAdminAccessToken(res);
    } catch (error) {
        
    }
}
