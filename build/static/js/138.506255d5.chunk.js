(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{379:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(4);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(a=u(t).call(this,e))||"object"!==i(a)&&"function"!==typeof a?s(o):a).state={modal:!1,backdrop:!0},n.toggle=n.toggle.bind(s(s(n))),n.changeBackdrop=n.changeBackdrop.bind(s(s(n))),n}var n,o,p;return n=t,(o=[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"changeBackdrop",value:function(e){var t=e.target.value;"static"!==t&&(t=JSON.parse(t)),this.setState({backdrop:t})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(r.L,{inline:!0,onSubmit:function(e){return e.preventDefault()}},a.a.createElement(r.N,null,a.a.createElement(r.V,{for:"backdrop"},"Backdrop value")," ",a.a.createElement(r.P,{type:"select",name:"backdrop",id:"backdrop",onChange:this.changeBackdrop},a.a.createElement("option",{value:"true"},"true"),a.a.createElement("option",{value:"false"},"false"),a.a.createElement("option",{value:"static"},'"static"')))," ",a.a.createElement(r.e,{color:"danger",onClick:this.toggle},"Modal")),a.a.createElement(r.Ca,{isOpen:this.state.modal,toggle:this.toggle,backdrop:this.state.backdrop},a.a.createElement(r.Fa,{toggle:this.toggle},"Modal title"),a.a.createElement(r.Da,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),a.a.createElement(r.Ea,null,a.a.createElement(r.e,{color:"primary",onClick:this.toggle},"Do Something")," ",a.a.createElement(r.e,{color:"secondary",onClick:this.toggle},"Cancel"))))}}])&&c(n.prototype,o),p&&c(n,p),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");l(e.prototype,t&&t.prototype),t&&l(e,t)}(t,e),t}(a.a.Component);t.default=p}}]);
//# sourceMappingURL=138.506255d5.chunk.js.map