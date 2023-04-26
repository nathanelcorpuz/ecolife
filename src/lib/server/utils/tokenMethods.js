// verify refresh token
// verify access token
// sign refresh token
// sign access token

import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRATION =
	+process.env.ACCESS_TOKEN_EXPIRATION_MINUTES * 60;
const REFRESH_TOKEN_EXPIRATION =
	+process.env.REFRESH_TOKEN_EXPIRATION_MINUTES * 60;

export const verifyRefreshToken = (refreshToken) => {
	try {
		const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
		return decoded;
	} catch (error) {
		return false;
	}
};

export const verifyAccessToken = (accessToken) => {
	try {
		const decoded = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
		return decoded;
	} catch (error) {
		return false;
	}
};

export const signRefreshToken = (email) => {
	return jwt.sign({ email }, REFRESH_TOKEN_SECRET, {
		expiresIn: REFRESH_TOKEN_EXPIRATION,
	});
};

export const signAccessToken = (email) => {
	return jwt.sign({ email }, ACCESS_TOKEN_SECRET, {
		expiresIn: ACCESS_TOKEN_EXPIRATION,
	});
};
