//rollup + ts + 不使用node内置包，使用本地同名包
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

import cleaner from 'rollup-plugin-cleaner';
import pkg from './package.json';

export default {
  input: 'src/test2.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
      plugins: [terser()] //<<== 这里按需或者是plugins内使用
    },
  ],
  plugins: [
    commonjs(),
    nodeResolve({
      preferBuiltins: false //不使用内置的npm包
    }),
    //此处需要明确指名tsconfig的路径，否则会有解析问题
    typescript({ tsconfig: './tsconfig.json', module: 'es6' }),
    cleaner({
      targets: [
        './es/',
        './lib/',
      ]
    }),
    // terser() <<== 这里
  ],
};