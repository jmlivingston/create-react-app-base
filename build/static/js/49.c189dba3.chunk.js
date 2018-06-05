webpackJsonp([49], {
  263: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return c
      })
    var r = n(0),
      o = n.n(r),
      i = n(30)
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
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function l(e, t) {
      return !t || ('object' !== a(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var c = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          l(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, r, a
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, o.a.Component),
        (n = t),
        (r = [
          {
            key: 'render',
            value: function() {
              return o.a.createElement(
                i.ListGroup,
                null,
                o.a.createElement(
                  i.ListGroupItem,
                  { active: !0 },
                  o.a.createElement(i.ListGroupItemHeading, null, 'List group item heading'),
                  o.a.createElement(
                    i.ListGroupItemText,
                    null,
                    'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
                  )
                ),
                o.a.createElement(
                  i.ListGroupItem,
                  null,
                  o.a.createElement(i.ListGroupItemHeading, null, 'List group item heading'),
                  o.a.createElement(
                    i.ListGroupItemText,
                    null,
                    'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
                  )
                ),
                o.a.createElement(
                  i.ListGroupItem,
                  null,
                  o.a.createElement(i.ListGroupItemHeading, null, 'List group item heading'),
                  o.a.createElement(
                    i.ListGroupItemText,
                    null,
                    'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
                  )
                )
              )
            }
          }
        ]) && u(n.prototype, r),
        a && u(n, a),
        t
      )
    })()
  }
})
//# sourceMappingURL=49.c189dba3.chunk.js.map
