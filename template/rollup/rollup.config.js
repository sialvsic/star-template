//基础 rollup配置

import cleaner from 'rollup-plugin-cleaner';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    }
  ],
  plugins: [
    cleaner({
      targets: [
        './es/',
        './lib/',
      ]
    })]
};