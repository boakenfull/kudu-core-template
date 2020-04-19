import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import json from '@rollup/plugin-json'

export default {
  input: ['src/index.js', '.themework/main.js'],
  output: [
    {
      dir: `dist`,
      sourcemap: true
    },
  ],
  plugins: [
    json(),
    external(),
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
