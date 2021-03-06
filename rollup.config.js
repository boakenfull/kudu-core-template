import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import json from '@rollup/plugin-json'
import multi from '@rollup/plugin-multi-entry';

export default {
  input: ['src/index.js', '.themework/main.js'],
  output: [
    {
      file: `dist/index.js`,
      format: 'cjs',
      sourcemap: true
    },
  ],
  plugins: [
    json(),
    external(),
    multi(),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs()
  ]
}
