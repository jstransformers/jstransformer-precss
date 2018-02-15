'use strict'

const precss = require('precss')
const extend = require('extend-shallow')

exports.name = 'precss'
exports.outputFormat = 'css'

exports.renderAsync = function (str, options, locals) {
  return new Promise((resolve, reject) => {
    const opts = extend({}, options, locals)
    // TODO: Add opts.from to allow correct source maps.
    precss.process(str, opts).then(result => {
      resolve(result.css)
    }).catch(reject)
  })
}
