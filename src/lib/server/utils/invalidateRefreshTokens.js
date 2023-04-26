import RefreshToken from "../models/RefreshToken";
import User from "../models/User";

export default async function invalidateRefreshTokens(email) {
	try {
		const user = await User.findOne({ email });
		await RefreshToken.updateMany({ userId: user._id }, { isValid: false });
	} catch (error) {
		console.log(error);
	}
}
