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
    extend: {},
  },
  plugins: [
      require('tailwindcss-debug-screens'),
  ],
};
