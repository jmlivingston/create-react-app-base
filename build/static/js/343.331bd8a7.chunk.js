webpackJsonp([343],{652:function(n,i,a){var A=a(653);"string"===typeof A&&(A=[[n.i,A,""]]);var e={hmr:!1,transform:void 0};a(29)(A,e);A.locals&&(n.exports=A.locals)},653:function(n,i,a){(n.exports=a(28)(!0)).push([n.i,"@-webkit-keyframes ball-scale-ripple{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:1}70%{-webkit-transform:scale(1);transform:scale(1);opacity:.7}to{opacity:0}}@keyframes ball-scale-ripple{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:1}70%{-webkit-transform:scale(1);transform:scale(1);opacity:.7}to{opacity:0}}.ball-scale-ripple>div{-webkit-animation-fill-mode:both;animation-fill-mode:both;height:50px;width:50px;border-radius:100%;border:2px solid #fff;-webkit-animation:ball-scale-ripple 1s 0s infinite cubic-bezier(.21,.53,.56,.8);animation:ball-scale-ripple 1s 0s infinite cubic-bezier(.21,.53,.56,.8)}","",{version:3,sources:["/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/ball-scale-ripple.scss","/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss","/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_variables.scss"],names:[],mappings:"AAGA,qCACE,GACE,4BAAqB,AAArB,oBAAqB,AACrB,SAAU,CAAA,AAEZ,IACE,2BAAmB,AAAnB,mBAAmB,AACnB,UAAY,CAAA,AAEd,GACE,SAAY,CAAA,CAAA,AAVhB,6BACE,GACE,4BAAqB,AAArB,oBAAqB,AACrB,SAAU,CAAA,AAEZ,IACE,2BAAmB,AAAnB,mBAAmB,AACnB,UAAY,CAAA,AAEd,GACE,SAAY,CAAA,CAAA,AAIhB,uBCZE,iCAAyB,AAAzB,yBAAyB,ADiBvB,YAAY,AACZ,WAAW,AACX,mBAAmB,AACnB,sBEzBgB,AF0BhB,gFAAwE,AAAxE,uEAAwE,CACzE",file:"ball-scale-ripple.scss",sourcesContent:["@import '../variables';\n@import '../mixins';\n\n@keyframes ball-scale-ripple {\n  0% {\n    transform: scale(0.1);\n    opacity: 1;\n  }\n  70% {\n    transform: scale(1);\n    opacity: 0.7;\n  }\n  100% {\n    opacity: 0.0;\n  }\n}\n\n.ball-scale-ripple {\n\n  > div {\n    @include global-animation();\n\n    height: 50px;\n    width: 50px;\n    border-radius: 100%;\n    border: 2px solid $primary-color;;\n    animation: ball-scale-ripple 1s 0s infinite cubic-bezier(.21,.53,.56,.8);\n  }\n}\n","@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n","$primary-color: #fff !default;\n$ball-size: 15px !default;\n$margin: 2px !default;\n$line-height: 35px !default;\n$line-width: 4px !default;\n\n"],sourceRoot:""}])}});
//# sourceMappingURL=343.331bd8a7.chunk.js.map