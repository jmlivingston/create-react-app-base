webpackJsonp([350], {
  637: function(n, s, i) {
    var a = i(638)
    'string' === typeof a && (a = [[n.i, a, '']])
    var e = { hmr: !1, transform: void 0 }
    i(29)(a, e)
    a.locals && (n.exports = a.locals)
  },
  638: function(n, s, i) {
    ;(n.exports = i(28)(!0)).push([
      n.i,
      '@-webkit-keyframes ball-pulse-round{0%,80%,to{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}@keyframes ball-pulse-round{0%,80%,to{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}.ball-pulse-round>div{-webkit-animation-fill-mode:both;animation-fill-mode:both;width:10px;height:10px;-webkit-animation:ball-pulse-round 1.2s infinite ease-in-out;animation:ball-pulse-round 1.2s infinite ease-in-out}',
      '',
      {
        version: 3,
        sources: [
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/ball-pulse-round.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss'
        ],
        names: [],
        mappings:
          'AAGA,oCACE,UACE,mBAAqB,AACrB,0BAA6B,CAAA,AAC7B,IACA,mBAAqB,AACrB,0BAA6B,CAAA,CAAA,AANjC,4BACE,UACE,mBAAqB,AACrB,0BAA6B,CAAA,AAC7B,IACA,mBAAqB,AACrB,0BAA6B,CAAA,CAAA,AAIjC,sBCRE,iCAAyB,AAAzB,yBAAyB,ADavB,WAAW,AACX,YAAY,AACZ,6DAAqD,AAArD,oDAAqD,CACtD',
        file: 'ball-pulse-round.scss',
        sourcesContent: [
          "@import '../variables';\n@import '../mixins';\n\n@keyframes ball-pulse-round {\n  0%, 80%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 40% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n\n.ball-pulse-round {\n\n  > div {\n    @include global-animation();\n\n    width: 10px;\n    height: 10px;\n    animation: ball-pulse-round 1.2s infinite ease-in-out;\n  }\n}\n\n",
          '@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n'
        ],
        sourceRoot: ''
      }
    ])
  }
})
//# sourceMappingURL=350.4a4130c1.chunk.js.map
