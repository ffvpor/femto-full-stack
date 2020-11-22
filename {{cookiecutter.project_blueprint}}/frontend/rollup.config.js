import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;
const port = process.env.PORT || 5000;

const plugins = [
	svelte({
		// enable run-time checks when not in production
		dev: !production,
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css: css => {
			css.write('bundle.css');
		},
		preprocess: sveltePreprocess({
			sourceMap: !production,
			postcss: {
			  plugins: [
				 require("tailwindcss"),
				 require("autoprefixer"),
				 require("postcss-nesting")
			  ],
			},
		  }),
	}),

	// If you have external dependencies installed from
	// npm, you'll most likely need these plugins. In
	// some cases you'll need additional configuration -
	// consult the documentation for details:
	// https://github.com/rollup/plugins/tree/master/packages/commonjs
	resolve({
		browser: true,
		dedupe: ['svelte']
  }),

  commonjs(),

	typescript({
		sourceMap: !production,
		inlineSources: !production
  }),

  // Start dev server
  !production && serve({
    contentBase: 'public',
    historyApiFallback: true, // for SPAs
    port,
  }),

  // Watch the `public` directory and refresh the
	// browser on changes when not in production
  !production && livereload({ watch: 'public' }),

  // If we're building for production (npm run build
	// instead of npm run dev), minify
  production && terser()
]

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: !production,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins,
	watch: {
		clearScreen: false
	}
};
