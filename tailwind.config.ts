import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'badge-gradient':
          'linear-gradient(109deg, #C084FC 11.33%, #22C55E 84.05%)',
      },
      fontFamily: {
        Pretendard: ['Pretendard-Regular'],
      },
      boxShadow: {
        primary: '0px 4px 30px 0px rgba(75, 85, 99, 0.04)',
        secondary: '4px 4px 20px 0px rgba(75, 85, 99, 0.24)',
        profile: '0px 4px 4px 0px rgba(30, 78, 216, 0.08)',
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
