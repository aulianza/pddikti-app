module.exports = {
	content: [
		"./public/**/*.html",
		"./src/**/*.{js,jsx,ts,tsx,vue}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Gotham Rounded"],
			},
		},
	},
	plugins: [],
};
