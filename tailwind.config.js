/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		colors: {
			blue: {
				250: "#1fb6ff",
				450: "#2196f3",
				650: "#232f3e",
			},
			purple: { 500: "#7e5bef" },
			pink: {
				500: "#ff49db",
			},
			orange: "#ff7849",
			green: {
				500: "#13ce66",
			},
			yellow: "#ffc82c",
			"gray-dark": "#273444",
			gray: "#8492a6",
			"gray-light": "#d3dce6",
		},
		extend: {},
	},

	plugins: [],
};
