/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			sans: ["Lato", "sans-serif"],
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			"standard-dark": {
				DEFAULT: "#202020",
				100: "#202020",
				200: "#303030",
				300: "#404040",
			},
			"standard-balanced": {
				DEFAULT: "#909090",
				100: "#909090",
				200: "#808080",
				300: "#707070",
			},
			"standard-light": {
				DEFAULT: "#FAFAFA",
				100: "#FAFAFA",
				200: "#DEDEDE",
				300: "#CCCCCC",
			},
			"accent-dark": {
				DEFAULT: "#12370E",
				100: "#12370E",
				200: "#154010",
				300: "#1a4f14",
			},
			"accent-balanced": {
				DEFAULT: "#25995C",
				100: "#25995C",
				200: "#1f824e",
				300: "#1a6b40",
			},
			"accent-light": {
				DEFAULT: "#FFF7EB",
				100: "#FFF7EB",
				200: "#ebe2d5",
				300: "#d1c9be",
			},
		},
		extend: {},
	},
	plugins: [],
};
