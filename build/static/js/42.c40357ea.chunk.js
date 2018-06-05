webpackJsonp([42], {
  270: function(e, t, o) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var n = o(0),
      a = o.n(n),
      r = o(30)
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
      for (var o = 0; o < t.length; o++) {
        var n = t[o]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
    }
    function c(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return e
    }
    var u = (function(e) {
      function t(e) {
        var o, n, a
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (n = this),
          ((o =
            !(a = (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)) ||
            ('object' !== i(a) && 'function' !== typeof a)
              ? c(n)
              : a).state = { modal: !1, backdrop: !0 }),
          (o.toggle = o.toggle.bind(c(o))),
          (o.changeBackdrop = o.changeBackdrop.bind(c(o))),
          o
        )
      }
      var o, n, u
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, a.a.Component),
        (o = t),
        (n = [
          {
            key: 'toggle',
            value: function() {
              this.setState({ modal: !this.state.modal })
            }
          },
          {
            key: 'changeBackdrop',
            value: function(e) {
              var t = e.target.value
              'static' !== t && (t = JSON.parse(t)), this.setState({ backdrop: t })
            }
          },
          {
            key: 'render',
            value: function() {
              return a.a.createElement(
                'div',
                null,
                a.a.createElement(
                  r.Form,
                  {
                    inline: !0,
                    onSubmit: function(e) {
                      return e.preventDefault()
                    }
                  },
                  a.a.createElement(
                    r.FormGroup,
                    null,
                    a.a.createElement(r.Label, { for: 'backdrop' }, 'Backdrop value'),
                    ' ',
                    a.a.createElement(
                      r.Input,
                      { type: 'select', name: 'backdrop', id: 'backdrop', onChange: this.changeBackdrop },
                      a.a.createElement('option', { value: 'true' }, 'true'),
                      a.a.createElement('option', { value: 'false' }, 'false'),
                      a.a.createElement('option', { value: 'static' }, '"static"')
                    )
                  ),
                  ' ',
                  a.a.createElement(r.Button, { color: 'danger', onClick: this.toggle }, 'Modal')
                ),
                a.a.createElement(
                  r.Modal,
                  { isOpen: this.state.modal, toggle: this.toggle, backdrop: this.state.backdrop },
                  a.a.createElement(r.ModalHeader, { toggle: this.toggle }, 'Modal title'),
                  a.a.createElement(
                    r.ModalBody,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  a.a.createElement(
                    r.ModalFooter,
                    null,
                    a.a.createElement(r.Button, { color: 'primary', onClick: this.toggle }, 'Do Something'),
                    ' ',
                    a.a.createElement(r.Button, { color: 'secondary', onClick: this.toggle }, 'Cancel')
                  )
                )
              )
            }
          }
        ]) && l(o.prototype, n),
        u && l(o, u),
        t
      )
    })()
    t.default = u
  }
})
//# sourceMappingURL=42.c40357ea.chunk.js.map
