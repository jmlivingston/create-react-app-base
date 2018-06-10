'use strict'
const acorn = require('./acorn')

const plugins = [
  [require('acorn-dynamic-import/lib/inject').default, 'dynamicImport'],
  [require('acorn-import-meta/inject'), 'importMeta'],
  [require('acorn-bigint/inject'), 'bigInt'],
  [require('acorn-optional-catch-binding/inject'), 'optionalCatchBinding'],
  [require('acorn-class-fields/inject'), 'classFields'],
  [require('acorn-private-methods/inject'), 'privateMethods'],
  [require('acorn-json-superset/inject'), 'jsonSuperset'],
  [require('acorn-stage3/inject'), 'stage3'],
  [require('acorn-static-class-property-initializer/inject', 'staticClassPropertyInitializer')],
  [require('acorn-jsx/inject', 'jsx')]
]

module.exports = acorn => {
  acorn = plugins.reduce((acorn_, p) => p[0](acorn_), acorn)
  acorn.plugins.stage3 = instance => {
    plugins.forEach(p => {
      if (p[1] in instance.options) return
      acorn.plugins[p[1]](instance)
    })
  }
  return acorn
}
