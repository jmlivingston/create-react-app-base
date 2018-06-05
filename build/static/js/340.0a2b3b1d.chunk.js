webpackJsonp([340], {
  657: function(n, i, A) {
    var a = A(658)
    'string' === typeof a && (a = [[n.i, a, '']])
    var l = { hmr: !1, transform: void 0 }
    A(29)(a, l)
    a.locals && (n.exports = a.locals)
  },
  658: function(n, i, A) {
    ;(n.exports = A(28)(!0)).push([
      n.i,
      '@-webkit-keyframes ball-spin-loader{75%{opacity:.2}to{opacity:1}}@keyframes ball-spin-loader{75%{opacity:.2}to{opacity:1}}.ball-spin-loader{position:relative}.ball-spin-loader>span:first-child{top:45px;left:0;-webkit-animation:ball-spin-loader 2s .9s infinite linear;animation:ball-spin-loader 2s .9s infinite linear}.ball-spin-loader>span:nth-child(2){top:30.68182px;left:30.68182px;-webkit-animation:ball-spin-loader 2s 1.8s infinite linear;animation:ball-spin-loader 2s 1.8s infinite linear}.ball-spin-loader>span:nth-child(3){top:0;left:45px;-webkit-animation:ball-spin-loader 2s 2.7s infinite linear;animation:ball-spin-loader 2s 2.7s infinite linear}.ball-spin-loader>span:nth-child(4){top:-30.68182px;left:30.68182px;-webkit-animation:ball-spin-loader 2s 3.6s infinite linear;animation:ball-spin-loader 2s 3.6s infinite linear}.ball-spin-loader>span:nth-child(5){top:-45px;left:0;-webkit-animation:ball-spin-loader 2s 4.5s infinite linear;animation:ball-spin-loader 2s 4.5s infinite linear}.ball-spin-loader>span:nth-child(6){top:-30.68182px;left:-30.68182px;-webkit-animation:ball-spin-loader 2s 5.4s infinite linear;animation:ball-spin-loader 2s 5.4s infinite linear}.ball-spin-loader>span:nth-child(7){top:0;left:-45px;-webkit-animation:ball-spin-loader 2s 6.3s infinite linear;animation:ball-spin-loader 2s 6.3s infinite linear}.ball-spin-loader>span:nth-child(8){top:30.68182px;left:-30.68182px;-webkit-animation:ball-spin-loader 2s 7.2s infinite linear;animation:ball-spin-loader 2s 7.2s infinite linear}.ball-spin-loader>div{-webkit-animation-fill-mode:both;animation-fill-mode:both;position:absolute;width:15px;height:15px;border-radius:100%;background:green}',
      '',
      {
        version: 3,
        sources: [
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/ball-spin-loader.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss'
        ],
        names: [],
        mappings:
          'AAKA,oCACE,IACE,UAAY,CAAA,AAEd,GACE,SAAU,CAAA,CAAA,AALd,4BACE,IACE,UAAY,CAAA,AAEd,GACE,SAAU,CAAA,CAAA,AAyCd,kBAEE,iBAAkB,CAWnB,AAhDG,mCAKI,SAlBK,AAmBL,OAAO,AAwBT,0DAA0D,AAA1D,iDAA0D,CAC3D,AA/BD,oCAQI,eANuC,AAOvC,gBAPuC,AA4BzC,2DAA0D,AAA1D,kDAA0D,CAC3D,AA/BD,oCAWI,MAAM,AACN,UAzBK,AA2CP,2DAA0D,AAA1D,kDAA0D,CAC3D,AA/BD,oCAcI,gBAZuC,AAavC,gBAbuC,AA4BzC,2DAA0D,AAA1D,kDAA0D,CAC3D,AA/BD,oCAiBI,UA9BK,AA+BL,OAAO,AAYT,2DAA0D,AAA1D,kDAA0D,CAC3D,AA/BD,oCAoBI,gBAlBuC,AAmBvC,iBAnBuC,AA4BzC,2DAA0D,AAA1D,kDAA0D,CAC3D,AA/BD,oCAuBI,MAAM,AACN,WArCK,AA2CP,2DAA0D,AAA1D,kDAA0D,CAC3D,AA/BD,oCA0BI,eAxBuC,AAyBvC,iBAzBuC,AA4BzC,2DAA0D,AAA1D,kDAA0D,CAC3D,AAIL,sBC9CE,iCAAyB,AAAzB,yBAAyB,ADqDvB,kBAAkB,AAClB,WAAW,AACX,YAAY,AACZ,mBAAmB,AACnB,gBAAiB,CAClB',
        file: 'ball-spin-loader.scss',
        sourcesContent: [
          "@import '../variables';\n@import '../mixins';\n\n$radius: 45px;\n\n@keyframes ball-spin-loader {\n  75% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@mixin ball-spin-loader($n:8, $start:1) {\n  @for $i from $start through $n {\n    > span:nth-child(#{$i}) {\n      $iter: 360 / $n;\n      $quarter: ($radius / 2) + ($radius / 5.5);\n\n      @if $i == 1 {\n        top: $radius;\n        left: 0;\n      } @else if $i == 2 {\n        top: $quarter;\n        left: $quarter;\n      } @else if $i == 3 {\n        top: 0;\n        left: $radius;\n      } @else if $i == 4 {\n        top: -$quarter;\n        left: $quarter;\n      } @else if $i == 5 {\n        top: -$radius;\n        left: 0;\n      } @else if $i == 6 {\n        top: -$quarter;\n        left: -$quarter;\n      } @else if $i == 7 {\n        top: 0;\n        left: -$radius;\n      } @else if $i == 8 {\n        top: $quarter;\n        left: -$quarter;\n      }\n\n      animation: ball-spin-loader 2s ($i * 0.9s) infinite linear;\n    }\n  }\n}\n\n.ball-spin-loader {\n  @include ball-spin-loader();\n  position: relative;\n\n  > div {\n    @include global-animation();\n\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    border-radius: 100%;\n    background: green;\n  }\n}\n",
          '@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n'
        ],
        sourceRoot: ''
      }
    ])
  }
})
//# sourceMappingURL=340.0a2b3b1d.chunk.js.map
