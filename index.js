'use strict'

const precss = require('precss')
const scss = require('postcss-scss')
const extend = require('extend-shallow')

exports.name = 'precss'
exports.outputFormat = 'css'

exports.renderAsync = function (str, options, locals) {
  return new Promise((resolve, reject) => {
    extend(options, locals)
    precss(options).process(str, {
      parser: scss
    }).then(result => {
      resolve(result.css)
    }).catch(reject)
  })
}
