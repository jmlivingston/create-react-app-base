webpackJsonp([25], {
  287: function(e, t, o) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var n = o(0),
      r = o.n(n),
      a = o(30)
    function i(e) {
      return (i =
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
    function l(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function p(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
    }
    function u(e, t, o) {
      return t && p(e.prototype, t), o && p(e, o), e
    }
    function c(e, t) {
      return !t || ('object' !== i(t) && 'function' !== typeof t) ? f(e) : t
    }
    function s(e, t) {
      if ('function' !== typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function')
      ;(e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
    }
    function f(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return e
    }
    var m = (function(e) {
        function t(e) {
          var o
          return (
            l(this, t),
            ((o = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))).toggle = o.toggle.bind(f(o))),
            (o.state = { popoverOpen: !1 }),
            o
          )
        }
        return (
          s(t, r.a.Component),
          u(t, [
            {
              key: 'toggle',
              value: function() {
                this.setState({ popoverOpen: !this.state.popoverOpen })
              }
            },
            {
              key: 'render',
              value: function() {
                return r.a.createElement(
                  'span',
                  null,
                  r.a.createElement(
                    a.Button,
                    { className: 'mr-1', color: 'secondary', id: 'Popover-' + this.props.id, onClick: this.toggle },
                    this.props.item.text
                  ),
                  r.a.createElement(
                    a.Popover,
                    {
                      placement: this.props.item.placement,
                      isOpen: this.state.popoverOpen,
                      target: 'Popover-' + this.props.id,
                      toggle: this.toggle
                    },
                    r.a.createElement(a.PopoverHeader, null, 'Popover Title'),
                    r.a.createElement(
                      a.PopoverBody,
                      null,
                      'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
                    )
                  )
                )
              }
            }
          ]),
          t
        )
      })(),
      y = (function(e) {
        function t(e) {
          var o
          return (
            l(this, t),
            ((o = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))).state = {
              popovers: [
                { placement: 'top', text: 'Top' },
                { placement: 'bottom', text: 'Bottom' },
                { placement: 'left', text: 'Left' },
                { placement: 'right', text: 'Right' }
              ]
            }),
            o
          )
        }
        return (
          s(t, r.a.Component),
          u(t, [
            {
              key: 'render',
              value: function() {
                return r.a.createElement(
                  'div',
                  null,
                  this.state.popovers.map(function(e, t) {
                    return r.a.createElement(m, { key: t, item: e, id: t })
                  })
                )
              }
            }
          ]),
          t
        )
      })()
    t.default = y
  }
})
//# sourceMappingURL=25.4d0f0a08.chunk.js.map
