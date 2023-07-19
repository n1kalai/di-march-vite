/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		colors: {
			blue: {
				250: "#1fb6ff",
				450: "#2196f3",
			},
			purple: "#7e5bef",
			pink: "#ff49db",
			orange: "#ff7849",
			green: "#13ce66",
			yellow: "#ffc82c",
			"gray-dark": "#273444",
			gray: "#8492a6",
			"gray-light": "#d3dce6",
		},
		extend: {},
	},

	plugins: [],
};
