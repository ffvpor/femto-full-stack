const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
  ],
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: production
  },
  theme: {
    fontFamily: {
      sans: ['Nato', 'sans-serif'],
      display: ['Nato', 'sans-serif'],
      body: ['Nato', 'sans-serif'],
    },
    extend: {}
  }
};
