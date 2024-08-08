/** @type {import('tailwindcss').Config} */
import { PluginAPI } from 'tailwindcss/types/config';
import { withUt } from 'uploadthing/tw';

module.exports = withUt({
  darkMode: ['class'],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C43BC4',
          '50': '#F5E6F5',
          '100': '#EAD1EA',
          '200': '#D3A3D3',
          '300': '#BD75BD',
          '400': '#A646A6',
          '500': '#8B008B',
          '600': '#700070',
          '700': '#560056',
          '800': '#3B003B',
          '900': '#200020',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#00FFFF',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FFFF00',
          foreground: '#000000',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          '50': '#333333',
          '100': '#4D4D4D',
          '200': '#666666',
          '300': '#808080',
          '400': '#999999',
          '500': '#B3B3B3',
          '600': '#CCCCCC',
          '700': '#E6E6E6',
          '800': '#F2F2F2',
          '900': '#FFFFFF',
        },
        coral: {
          500: '#15BF59',
        },
        grey: {
          600: '#545454',
          500: '#757575',
          400: '#AFAFAF',
          100: '#F2EFEF',
          50: '#F6F6F6',
        },
        black: '#000000',
        white: '#FFFFFF',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'dotted-pattern': "url('/assets/images/dotted-pattern.png')",
        'hero-img': "url('/assets/images/hero.png')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        'neon-pink': '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 40px #FF00FF',
        'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF',
      },
      textShadow: {
        'neon-pink': '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 40px #FF00FF',
        'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.text-shadow-neon-pink': {
          textShadow: '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 40px #FF00FF',
        },
        '.text-shadow-neon-blue': {
          textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF',
        },
      };

      addUtilities(newUtilities, {
        respectPrefix: false,
        respectImportant: false,
      });
    },
  ],
});
