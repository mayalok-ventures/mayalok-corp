import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                void: '#030303',
                carbon: '#0B0F14',
                graphite: '#1C1F26',
                platinum: '#E6E6E6',
                'platinum-soft': '#F5F5F5',
                'gray-muted': '#9CA3AF',
                'gold-accent': '#C7A14A',
            },
            backgroundImage: {
                'gold-glow': 'linear-gradient(135deg, rgba(199, 161, 74, 0.1) 0%, rgba(199, 161, 74, 0.05) 50%, rgba(199, 161, 74, 0.02) 100%)',
                'glass-dark': 'linear-gradient(135deg, rgba(12, 15, 20, 0.8) 0%, rgba(28, 31, 38, 0.6) 100%)',
            },
            backdropBlur: {
                'glass': '12px',
            },
            borderWidth: {
                '1': '1px',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out-expo forwards',
                'scale-in': 'scaleIn 0.4s ease-out-expo forwards',
                'tilt-hover': 'tiltHover 0.3s ease-out-expo',
                'particle-float': 'particleFloat 20s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                tiltHover: {
                    '0%, 100%': { transform: 'rotateX(0) rotateY(0)' },
                    '50%': { transform: 'rotateX(1deg) rotateY(1deg)' },
                },
                particleFloat: {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '50%': { transform: 'translateY(-20px) translateX(10px)' },
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

export default config