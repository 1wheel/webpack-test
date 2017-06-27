import npm from "rollup-plugin-node-resolve";


export default {
  entry: 'src/index.js',
  format: 'cjs',
  globals: {
    d3: 'd3'
  },
  // plugins: [npm({jsnext: true})],
  dest: 'dist/bundle.js' // equivalent to --output
};
