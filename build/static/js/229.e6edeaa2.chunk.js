webpackJsonp([229], {
  935: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var o = n(0),
      r = n.n(o),
      i = n(30),
      a = n(75),
      s = n(936)
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
    function u(e, t) {
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
    var f = (function(e) {
      function t() {
        var e, n, o
        !(function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        })(this, t)
        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
        return c(
          o,
          ((n = o = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i)))),
          (o.state = { isTermsConditionsModalOpen: !1 }),
          n)
        )
      }
      var n, l, f
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, o['PureComponent']),
        (n = t),
        (l = [
          {
            key: 'toggleTermsConditionsModal',
            value: function() {
              this.setState(function(e) {
                return { isTermsConditionsModalOpen: !e.isTermsConditionsModalOpen }
              })
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = new Date()
              return r.a.createElement(
                'div',
                { className: 'footer' },
                r.a.createElement(
                  'div',
                  { className: 'container-fluid text-center py-3' },
                  '\xa9 ',
                  t.getFullYear() - 1,
                  '-',
                  t.getFullYear(),
                  ' ',
                  a.a.COMPANY_NAME,
                  ' ',
                  this.props.strings.copyrightSuffix,
                  ' |',
                  this.props.strings.version,
                  ' ',
                  '0.1.1',
                  ' |\xa0',
                  r.a.createElement(
                    'span',
                    {
                      className: 'cursor-pointer',
                      onClick: function() {
                        return e.toggleTermsConditionsModal()
                      }
                    },
                    this.props.strings.termsConditions
                  ),
                  r.a.createElement(
                    i.Modal,
                    {
                      isOpen: this.state.isTermsConditionsModalOpen,
                      toggle: function() {
                        return e.toggleTermsConditionsModal()
                      }
                    },
                    r.a.createElement(
                      i.ModalHeader,
                      {
                        toggle: function() {
                          return e.toggleTermsConditionsModal()
                        }
                      },
                      this.props.strings.termsConditions
                    ),
                    r.a.createElement(i.ModalBody, null, r.a.createElement(s.a, null))
                  )
                )
              )
            }
          }
        ]) && u(n.prototype, l),
        f && u(n, f),
        t
      )
    })()
    t.default = f
  },
  936: function(e, t, n) {
    'use strict'
    var o = n(0),
      r = n.n(o),
      i = n(36)
    t.a = function() {
      return r.a.createElement(i.a, {
        stringNames: ['termsConditions'],
        render: function(e) {
          var t = e.strings
          return e.user, r.a.createElement('div', null, t.terms)
        }
      })
    }
  }
})
//# sourceMappingURL=229.e6edeaa2.chunk.js.map
