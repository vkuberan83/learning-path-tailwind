module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './index.html',
    './html/**/*.{html,htm}',
  ],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      // 'md': { 'min': '768px', 'max': '1023px' },
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {},
  },
  plugins: [
      require('tailwindcss-debug-screens'),
  ],
};
