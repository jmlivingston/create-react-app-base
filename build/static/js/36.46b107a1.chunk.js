webpackJsonp([36], {
  276: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return u
      })
    var r = n(0),
      a = n.n(r),
      o = n(30)
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
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
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
    var u = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, r, l
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, a.a.Component),
        (n = t),
        (r = [
          {
            key: 'render',
            value: function() {
              return a.a.createElement(
                'div',
                null,
                a.a.createElement('p', null, 'List Based'),
                a.a.createElement(
                  o.Nav,
                  null,
                  a.a.createElement(o.NavItem, null, a.a.createElement(o.NavLink, { href: '/' }, 'Link')),
                  a.a.createElement(o.NavItem, null, a.a.createElement(o.NavLink, { href: '/' }, 'Link')),
                  a.a.createElement(o.NavItem, null, a.a.createElement(o.NavLink, { href: '/' }, 'Another Link')),
                  a.a.createElement(
                    o.NavItem,
                    null,
                    a.a.createElement(o.NavLink, { disabled: !0, href: '/' }, 'Disabled Link')
                  )
                ),
                a.a.createElement('hr', null),
                a.a.createElement('p', null, 'Link Based'),
                a.a.createElement(
                  o.Nav,
                  null,
                  a.a.createElement(o.NavLink, { href: '/' }, 'Link'),
                  ' ',
                  a.a.createElement(o.NavLink, { href: '/' }, 'Link'),
                  ' ',
                  a.a.createElement(o.NavLink, { href: '/' }, 'Another Link'),
                  ' ',
                  a.a.createElement(o.NavLink, { disabled: !0, href: '/' }, 'Disabled Link')
                )
              )
            }
          }
        ]) && i(n.prototype, r),
        l && i(n, l),
        t
      )
    })()
  }
})
//# sourceMappingURL=36.46b107a1.chunk.js.map
