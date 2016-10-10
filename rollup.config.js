import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/intent-parser.js',
  format: 'umd',
  plugins: [
    babel({
      babelrc: false,
      presets: [
        'es2015-rollup',
      ],
      plugins: [
        [
          'transform-es2015-classes',
          {
            loose: true,
          },
        ],
      ],
    }),
    uglify()],
  moduleName: 'IntentParser',
  external: [
    'chrono-node',
    'moment',
  ],
  globals: {
    'chrono-node': 'chrono',
    moment: 'moment',
  },
  dest: 'dist/intent-parser.js',
  sourceMap: true,
};
