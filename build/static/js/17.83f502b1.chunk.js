webpackJsonp([17], {
  295: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return i
      })
    var r = n(0),
      l = n.n(r),
      a = n(30)
    function o(e) {
      return (o =
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
    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function u(e, t) {
      return !t || ('object' !== o(t) && 'function' !== typeof t)
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
          u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, r, o
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, l.a.Component),
        (n = t),
        (r = [
          {
            key: 'render',
            value: function() {
              return l.a.createElement(
                a.Table,
                { bordered: !0 },
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('th', null, '#'),
                    l.a.createElement('th', null, 'First Name'),
                    l.a.createElement('th', null, 'Last Name'),
                    l.a.createElement('th', null, 'Username')
                  )
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('th', { scope: 'row' }, '1'),
                    l.a.createElement('td', null, 'Mark'),
                    l.a.createElement('td', null, 'Otto'),
                    l.a.createElement('td', null, '@mdo')
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('th', { scope: 'row' }, '2'),
                    l.a.createElement('td', null, 'Jacob'),
                    l.a.createElement('td', null, 'Thornton'),
                    l.a.createElement('td', null, '@fat')
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('th', { scope: 'row' }, '3'),
                    l.a.createElement('td', null, 'Larry'),
                    l.a.createElement('td', null, 'the Bird'),
                    l.a.createElement('td', null, '@twitter')
                  )
                )
              )
            }
          }
        ]) && c(n.prototype, r),
        o && c(n, o),
        t
      )
    })()
  }
})
//# sourceMappingURL=17.83f502b1.chunk.js.map
