import npm from "rollup-plugin-node-resolve";


export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [npm({jsnext: true})],
  dest: 'bundle.js' // equivalent to --output
};
