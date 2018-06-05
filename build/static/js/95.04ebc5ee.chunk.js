webpackJsonp([95], {
  217: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return i
      })
    var o = n(0),
      r = n.n(o),
      u = n(30)
    function l(e) {
      return (l =
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
    function c(e, t) {
      return !t || ('object' !== l(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var i = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, o, l
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
                u.ButtonToolbar,
                null,
                r.a.createElement(
                  u.ButtonGroup,
                  null,
                  r.a.createElement(u.Button, null, '1'),
                  r.a.createElement(u.Button, null, '2'),
                  r.a.createElement(u.Button, null, '3'),
                  r.a.createElement(u.Button, null, '4')
                ),
                r.a.createElement(
                  u.ButtonGroup,
                  null,
                  r.a.createElement(u.Button, null, '5'),
                  r.a.createElement(u.Button, null, '6'),
                  r.a.createElement(u.Button, null, '7')
                ),
                r.a.createElement(u.ButtonGroup, null, r.a.createElement(u.Button, null, '8'))
              )
            }
          }
        ]) && a(n.prototype, o),
        l && a(n, l),
        t
      )
    })()
  }
})
//# sourceMappingURL=95.04ebc5ee.chunk.js.map
