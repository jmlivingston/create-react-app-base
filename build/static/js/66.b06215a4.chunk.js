webpackJsonp([66], {
  246: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return l
      })
    var o = n(0),
      r = n.n(o),
      c = n(30)
    function u(e) {
      return (u =
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
      return !t || ('object' !== u(t) && 'function' !== typeof t)
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
      var n, o, u
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
                c.Form,
                null,
                r.a.createElement(
                  c.FormGroup,
                  { check: !0, inline: !0 },
                  r.a.createElement(
                    c.Label,
                    { check: !0 },
                    r.a.createElement(c.Input, { type: 'checkbox' }),
                    ' Some input'
                  )
                ),
                r.a.createElement(
                  c.FormGroup,
                  { check: !0, inline: !0 },
                  r.a.createElement(
                    c.Label,
                    { check: !0 },
                    r.a.createElement(c.Input, { type: 'checkbox' }),
                    ' Some other input'
                  )
                )
              )
            }
          }
        ]) && a(n.prototype, o),
        u && a(n, u),
        t
      )
    })()
  }
})
//# sourceMappingURL=66.b06215a4.chunk.js.map
