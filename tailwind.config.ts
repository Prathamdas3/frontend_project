import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'top-pattern': "url('/pattern-circles.svg')",
				'icon_slider': "url('/icon-slider.svg')",
				'bg-pattern': "url('/bg-pattern')"
			},
			fontFamily: {
				manrope: ['var(--manrope-font)', 'sans-serif'],
			},
			colors: {

				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},

				// light ones
				fullSlider_soft_cyan: 'hsl(174, 77%, 80%)',
				slider_background: 'hsl(174, 86%, 45%)',
				discount_background: 'hsl(14, 92%, 95%)',
				discount_text: ' hsl(15, 100%, 70%)',
				CTA: 'hsl(226, 100%, 87%)',
				price_component_background: 'hsl(0, 0%, 100%)',
				main_background: 'hsl(230, 100%, 99%)',
				empty_slider_bar: 'hsl(224, 65%, 95%)',
				toggle_background: 'hsl(223, 50%, 87%)',
				text_text: 'hsl(225, 20%, 60%)',
				text_cta_background: 'hsl(227, 35%, 25%)',

				// dark ones
				dark_fullSlider_soft_cyan: 'hsl(174, 77%, 35%)',
				dark_slider_background: 'hsl(174, 86%, 30%)',
				dark_discount_background: 'hsl(14, 92%, 25%)',
				dark_discount_text: 'hsl(15, 100%, 60%)',
				dark_CTA: 'hsl(226, 100%, 85%)',
				dark_price_component_background: 'hsl(230, 15%, 15%)',
				dark_main_background: 'hsl(230, 15%, 10%)',
				dark_empty_slider_bar: 'hsl(224, 25%, 20%)',
				dark_toggle_background: 'hsl(223, 30%, 30%)',
				dark_text_text: 'hsl(225, 10%, 75%)',
				dark_text_cta_background: 'hsl(227, 25%, 20%)'

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			screens: {
				'md-plus': '1024px',
				'lg-plus': '1440px',
				'll-plus':'1920px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
