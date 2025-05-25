/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          pink: '#ff0080',
          blue: '#00ffff',
          purple: '#8b5cf6',
          green: '#00ff41',
          orange: '#ff6600',
          yellow: '#ffff00',
          dark: '#0a0a0a',
          darker: '#050505',
          gray: '#1a1a1a',
        },
        neon: {
          pink: '#ff007f',
          blue: '#00d4ff',
          green: '#39ff14',
          purple: '#bf00ff',
          orange: '#ff4500',
        }
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'mono': ['VT323', 'monospace'],
        'pixel': ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'scan': 'scan 2s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'terminal': 'terminal 1s infinite',
        'flicker': 'flicker 3s infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scan: {
          '0%': { backgroundPosition: '0 -100vh' },
          '35%, 100%': { backgroundPosition: '0 100vh' },
        },
        'pulse-neon': {
          from: { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00ffff, 0 0 20px #00ffff' },
          to: { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ffff, 0 0 40px #00ffff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        terminal: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: 1 },
          '20%, 24%, 55%': { opacity: 0.4 },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
        'scanlines': `repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 2px,
                        rgba(0,255,255,0.03) 2px,
                        rgba(0,255,255,0.03) 4px
                      )`,
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
