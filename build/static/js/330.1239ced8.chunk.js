webpackJsonp([330],{676:function(n,t,a){var e=a(677);"string"===typeof e&&(e=[[n.i,e,""]]);var A={hmr:!1,transform:void 0};a(29)(e,A);e.locals&&(n.exports=e.locals)},677:function(n,t,a){(n.exports=a(28)(!0)).push([n.i,"@-webkit-keyframes cube-transition{25%{-webkit-transform:translateX(50px) scale(.5) rotate(-90deg);transform:translateX(50px) scale(.5) rotate(-90deg)}50%{-webkit-transform:translate(50px,50px) rotate(-180deg);transform:translate(50px,50px) rotate(-180deg)}75%{-webkit-transform:translateY(50px) scale(.5) rotate(-270deg);transform:translateY(50px) scale(.5) rotate(-270deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}@keyframes cube-transition{25%{-webkit-transform:translateX(50px) scale(.5) rotate(-90deg);transform:translateX(50px) scale(.5) rotate(-90deg)}50%{-webkit-transform:translate(50px,50px) rotate(-180deg);transform:translate(50px,50px) rotate(-180deg)}75%{-webkit-transform:translateY(50px) scale(.5) rotate(-270deg);transform:translateY(50px) scale(.5) rotate(-270deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}.cube-transition{position:relative;-webkit-transform:translate(-25px,-25px);transform:translate(-25px,-25px)}.cube-transition>div{-webkit-animation-fill-mode:both;animation-fill-mode:both;width:10px;height:10px;position:absolute;top:-5px;left:-5px;background-color:#fff;-webkit-animation:cube-transition 1.6s 0s infinite ease-in-out;animation:cube-transition 1.6s 0s infinite ease-in-out}.cube-transition>div:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}","",{version:3,sources:["/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/cube-transition.scss","/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss","/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_variables.scss"],names:[],mappings:"AAMA,mCACE,IACE,4DAAwD,AAAxD,mDAAwD,CAAA,AAE1D,IACE,uDAAsD,AAAtD,8CAAsD,CAAA,AAExD,IACE,6DAAyD,AAAzD,oDAAyD,CAAA,AAE3D,GACE,iCAA0B,AAA1B,wBAA0B,CAAA,CAAA,AAX9B,2BACE,IACE,4DAAwD,AAAxD,mDAAwD,CAAA,AAE1D,IACE,uDAAsD,AAAtD,8CAAsD,CAAA,AAExD,IACE,6DAAyD,AAAzD,oDAAyD,CAAA,AAE3D,GACE,iCAA0B,AAA1B,wBAA0B,CAAA,CAAA,AAI9B,iBACE,kBAAkB,AAClB,yCAAgD,AAAhD,gCAAgD,CAiBjD,AAnBD,qBChBE,iCAAyB,AAAzB,yBAAyB,ADuBvB,WAxBO,AAyBP,YAzBO,AA0BP,kBAAkB,AAClB,SAAS,AACT,UAAU,AACV,sBEjCgB,AFkChB,+DAAuD,AAAvD,sDAAuD,CAKxD,AAlBH,gCAgBM,6BACF,AADE,oBACF,CAAC",file:"cube-transition.scss",sourcesContent:["@import '../variables';\n@import '../mixins';\n\n$amount: 50px;\n$size: 10px;\n\n@keyframes cube-transition {\n  25% {\n    transform: translateX($amount) scale(0.5) rotate(-90deg);\n  }\n  50% {\n    transform: translate($amount, $amount) rotate(-180deg);\n  }\n  75% {\n    transform: translateY($amount) scale(0.5) rotate(-270deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n\n.cube-transition {\n  position: relative;\n  transform: translate(-$amount / 2, -$amount / 2);\n\n  > div {\n    @include global-animation();\n\n    width: $size;\n    height: $size;\n    position: absolute;\n    top: -5px;\n    left: -5px;\n    background-color: $primary-color;\n    animation: cube-transition 1.6s 0s infinite ease-in-out;\n\n    &:last-child {\n      animation-delay: -0.8s\n    }\n  }\n}\n","@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n","$primary-color: #fff !default;\n$ball-size: 15px !default;\n$margin: 2px !default;\n$line-height: 35px !default;\n$line-width: 4px !default;\n\n"],sourceRoot:""}])}});
//# sourceMappingURL=330.1239ced8.chunk.js.map