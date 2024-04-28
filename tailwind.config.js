const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			cursor: {
				none: 'none',
				custom: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='12' cy='12' r='10'/%3e%3c/svg%3e\"), auto",
			},
			backgroundOpacity: {
				15: '0.15',
			},
			colors: {
				gray: {
					50: '#f9fafb',
					100: '#eaeaeb',
					200: '#cacbcd',
					300: '#a7a9ac',
					400: '#696c71',
					500: '#282d34',
					600: '#24292f',
					700: '#181b20',
					800: '#121518',
					900: '#0c0e10',
				},
				primary: {
					50: '#32a4ff',
					100: '#289aff',
					200: '#1e90ff',
					300: '#1486ff',
					400: '#0a7cff',
					500: '#0072ff',
					600: '#0068f5',
					700: '#005eeb',
					800: '#0054e1',
					900: '#004ad7',
				},
			},
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
