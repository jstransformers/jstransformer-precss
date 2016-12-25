'use strict'

var precss = require('precss')
var scss = require('postcss-scss')
var extend = require('extend-shallow')

exports.name = 'precss'
exports.outputFormat = 'css'

exports.renderAsync = function (str, options, locals) {
  return new Promise(function (resolve, reject) {
    extend(options, locals)
    precss(options).process(str, {
      parser: scss
    }).then(function (result) {
      resolve(result.css)
    }).catch(reject)
  })
}
