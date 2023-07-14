/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#edb193',
					secondary: '#4aef73',
					accent: '#dcc9ff',
					neutral: '#322b36',
					'base-100': '#47285d',
					info: '#65b5e6',
					success: '#238b7f',
					warning: '#cd8704',
					error: '#e42f54',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
