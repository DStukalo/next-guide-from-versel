// --color-green-a1: #78dcca;

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		colors: {
			white: {
				100: "rgb(var(--color-white-a1) / <alpha-value>)",
				200: "rgb(var(--color-white-a2) / <alpha-value>)",
			},
			blue: {
				100: "rgb(var(--color-blue-a1) / <alpha-value>)",
			},
			gray: {
				100: "rgb(var(--color-gray-a1) / <alpha-value>)",
				200: "rgb(var(--color-gray-a2) / <alpha-value>)",
			},
			black: {
				100: "rgb(var(--color-black-a1) / <alpha-value>)",
			},
			purple: {
				100: "rgb(var(--color-purple-a1) / <alpha-value>)",
				200: "rgb(var(--color-purple-a2) / <alpha-value>)",
			},
			green: {
				100: "rgb(var(--color-green-a1) / <alpha-value>)",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
				mono: ["var(--font-roboto)"],
			},
			spacing: {
				4.5: "1.125rem",
				5.5: "1.375rem",
				9.5: "2.375rem",
			},
			"translate-50": 'transform: "translate(-50%, -50%)"',
		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".header-link": {
					fontFamily: "var(--font-roboto) !important",
					fontSize: "1.125rem !important",
					fontWeight: "400 !important",
					lineHeight: "150% !important",
				},

				".main-title": {
					fontFamily: "var(--font-inter) !important",
					fontSize: "2.75rem !important",
					fontWeight: "400 !important",
					lineHeight: "150% !important",
				},
				".title": {
					fontFamily: "var(--font-inter) !important",
					fontSize: "1.5rem !important",
					fontWeight: "400 !important",
					lineHeight: "130% !important",
				},
				".main-text": {
					fontFamily: "var(--open-roboto) !important",
					fontSize: "1rem !important",
					fontWeight: "400 !important",
					lineHeight: "150% !important",
				},
				".sub-text": {
					fontFamily: "var(--open-roboto) !important",
					fontSize: "0.875rem !important",
					fontWeight: "400 !important",
					lineHeight: "150% !important",
				},
				".translate-50": {
					transform: "translate(-50%, -50%)",
				},
			});
		}),
	],
};
