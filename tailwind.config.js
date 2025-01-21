/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				green: "#017d7d",
				black: "#1b1b1b",
				gray: "#a6a6a6",
			},
		},
	},
	plugins: [],
}
