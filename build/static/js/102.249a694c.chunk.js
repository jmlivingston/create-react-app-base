webpackJsonp([102], {
  210: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return l
      })
    var o = n(0),
      r = n.n(o),
      c = n(30)
    function a(e) {
      return (a =
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
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n]
        ;(o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
      }
    }
    function i(e, t) {
      return !t || ('object' !== a(t) && 'function' !== typeof t)
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
      var n, o, a
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
                r.a.createElement(c.Button, { color: 'primary' }, 'primary'),
                ' ',
                r.a.createElement(c.Button, { color: 'secondary' }, 'secondary'),
                ' ',
                r.a.createElement(c.Button, { color: 'success' }, 'success'),
                ' ',
                r.a.createElement(c.Button, { color: 'info' }, 'info'),
                ' ',
                r.a.createElement(c.Button, { color: 'warning' }, 'warning'),
                ' ',
                r.a.createElement(c.Button, { color: 'danger' }, 'danger'),
                ' ',
                r.a.createElement(c.Button, { color: 'link' }, 'link')
              )
            }
          }
        ]) && u(n.prototype, o),
        a && u(n, a),
        t
      )
    })()
  }
})
//# sourceMappingURL=102.249a694c.chunk.js.map
