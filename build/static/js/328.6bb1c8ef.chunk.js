webpackJsonp([328], {
  681: function(e, t, r) {
    var n = r(682)
    'string' === typeof n && (n = [[e.i, n, '']])
    var i = { hmr: !1, transform: void 0 }
    r(29)(n, i)
    n.locals && (e.exports = n.locals)
  },
  682: function(e, t, r) {
    ;(e.exports = r(28)(!0)).push([
      e.i,
      '@-webkit-keyframes square-spin{25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}to{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}}@keyframes square-spin{25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}to{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}}.square-spin>div{-webkit-animation-fill-mode:both;animation-fill-mode:both;width:50px;height:50px;background:#fff;-webkit-animation:square-spin 3s 0s cubic-bezier(.09,.57,.49,.9) infinite;animation:square-spin 3s 0s cubic-bezier(.09,.57,.49,.9) infinite}',
      '',
      {
        version: 3,
        sources: [
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/square-spin.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_variables.scss'
        ],
        names: [],
        mappings:
          'AAGA,+BACE,IACE,gEAAwD,AAAxD,uDAAwD,CAAA,AAE1D,IACE,qEAA6D,AAA7D,4DAA6D,CAAA,AAE/D,IACE,gEAAwD,AAAxD,uDAAwD,CAAA,AAE1D,GACE,2DAAmD,AAAnD,kDAAmD,CAAA,CAAA,AAXvD,uBACE,IACE,gEAAwD,AAAxD,uDAAwD,CAAA,AAE1D,IACE,qEAA6D,AAA7D,4DAA6D,CAAA,AAE/D,IACE,gEAAwD,AAAxD,uDAAwD,CAAA,AAE1D,GACE,2DAAmD,AAAnD,kDAAmD,CAAA,CAAA,AAIvD,iBCbE,iCAAyB,AAAzB,yBAAyB,ADkBvB,WAAW,AACX,YAAY,AACZ,gBEzBgB,AF0BhB,0EAAkE,AAAlE,iEAAkE,CACnE',
        file: 'square-spin.scss',
        sourcesContent: [
          "@import '../variables';\n@import '../mixins';\n\n@keyframes square-spin {\n  25% {\n    transform: perspective(100px) rotateX(180deg) rotateY(0);\n  }\n  50% {\n    transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n  }\n  75% {\n    transform: perspective(100px) rotateX(0) rotateY(180deg);\n  }\n  100% {\n    transform: perspective(100px) rotateX(0) rotateY(0);\n  }\n}\n\n.square-spin {\n\n  > div {\n    @include global-animation();\n\n    width: 50px;\n    height: 50px;\n    background: $primary-color;\n    animation: square-spin 3s 0s cubic-bezier(.09,.57,.49,.9) infinite;\n  }\n}\n",
          '@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n',
          '$primary-color: #fff !default;\n$ball-size: 15px !default;\n$margin: 2px !default;\n$line-height: 35px !default;\n$line-width: 4px !default;\n\n'
        ],
        sourceRoot: ''
      }
    ])
  }
})
//# sourceMappingURL=328.6bb1c8ef.chunk.js.map
