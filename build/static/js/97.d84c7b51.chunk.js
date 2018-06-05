webpackJsonp([97], {
  215: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return l
      })
    var o = n(0),
      r = n.n(o),
      u = n(30)
    function c(e) {
      return (c =
        'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n]
        ;(o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
      }
    }
    function i(e, t) {
      return !t || ('object' !== c(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var l = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, o, c
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, r.a.Component),
        (n = t),
        (o = [
          {
            key: 'render',
            value: function() {
              return r.a.createElement(
                'div',
                null,
                r.a.createElement(u.Button, { outline: !0, color: 'primary' }, 'primary'),
                ' ',
                r.a.createElement(u.Button, { outline: !0, color: 'secondary' }, 'secondary'),
                ' ',
                r.a.createElement(u.Button, { outline: !0, color: 'success' }, 'success'),
                ' ',
                r.a.createElement(u.Button, { outline: !0, color: 'info' }, 'info'),
                ' ',
                r.a.createElement(u.Button, { outline: !0, color: 'warning' }, 'warning'),
                ' ',
                r.a.createElement(u.Button, { outline: !0, color: 'danger' }, 'danger')
              )
            }
          }
        ]) && a(n.prototype, o),
        c && a(n, c),
        t
      )
    })()
  }
})
//# sourceMappingURL=97.d84c7b51.chunk.js.map
