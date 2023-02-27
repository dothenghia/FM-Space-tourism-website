/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			'primary': '#FFFFFF',
			'secondary': '#D0D6F9',
			'back': '#0B0D17',
		},
		fontFamily: {
			font1: ['Bellefair', 'serif'],
			font2: ['Barlow Condensed', 'sans-serif'],
		},
		extend: {
			// backgroundImage: {
			// 	'mobileBgHome': "url('../assets/home/background-home-mobile.jpg')",
			// 	'tablet-BgHome': "url('../assets/home/background-home-tablet.jpg')",
			// 	'desktop-BgHome': "url('../assets/home/background-home-desktop.jpg')",
			// }
		},
	},
	plugins: [],
}
