//import { nodeResolve } from '@rollup/plugin-node-resolve';
//import commonjs from "rollup-plugin-commonjs";
//import nodeResolve from "rollup-plugin-node-resolve";
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'main.js',
  output: {
    file: './bundle.js',
    format: 'es',
    name: 'bundle',
    sourcemap: true
  },
  plugins: [resolve()]
};
// rollup --config
// rollup --config my.config.js