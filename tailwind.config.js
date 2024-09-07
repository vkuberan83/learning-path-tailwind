module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './index.html',
    './html/**/*.{html,htm}',
  ],
  theme: {
    debugScreens: {
      position: ['top', 'bottom'],
    },
    extend: {},
  },
  plugins: [
      require('tailwindcss-debug-screens'),
  ],
};
