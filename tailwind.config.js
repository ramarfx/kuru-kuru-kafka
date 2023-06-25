/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,css}'],
	theme: {
		extend: {
			colors: {
				kafka: {
					1 : '#4B0B52',
					2 : '#8D189A'
				}
			},
			fontFamily: {
				poppins: ['poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
