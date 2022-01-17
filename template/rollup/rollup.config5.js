//rollup + ts + 不使用node内置包
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

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
    },
  ],
  plugins: [
    commonjs(),
    nodeResolve({
      preferBuiltins: true //不使用内置的npm包
    }),
    //此处需要明确指名tsconfig的路径，否则会有解析问题
    typescript({ tsconfig: './tsconfig.json', module: 'es6' }),
    cleaner({
      targets: [
        './es/',
        './lib/',
      ]
    })]
};