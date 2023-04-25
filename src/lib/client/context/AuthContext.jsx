"use client";

import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState();

	return (
		<AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
}
