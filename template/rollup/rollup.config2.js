//rollup + ts

import typescript from '@rollup/plugin-typescript';
import cleaner from 'rollup-plugin-cleaner';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
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
    //此处需要明确指名tsconfig的路径，否则会有解析问题
    typescript({ tsconfig: './tsconfig.json', module: 'es6' }),
    cleaner({
      targets: [
        './es/',
        './lib/',
      ]
    })]
};