webpackJsonp([63], {
  249: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return c
      })
    var o = n(0),
      r = n.n(o),
      l = n(30)
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
    function p(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n]
        ;(o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
      }
    }
    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return e
    }
    var c = (function(e) {
      function t(e) {
        var n, o, r
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (o = this),
          ((n =
            !(r = (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)) ||
            ('object' !== a(r) && 'function' !== typeof r)
              ? u(o)
              : r).toggleDropDown = n.toggleDropDown.bind(u(n))),
          (n.toggleSplit = n.toggleSplit.bind(u(n))),
          (n.state = { dropdownOpen: !1, splitButtonOpen: !1 }),
          n
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
            key: 'toggleDropDown',
            value: function() {
              this.setState({ dropdownOpen: !this.state.dropdownOpen })
            }
          },
          {
            key: 'toggleSplit',
            value: function() {
              this.setState({ splitButtonOpen: !this.state.splitButtonOpen })
            }
          },
          {
            key: 'render',
            value: function() {
              return r.a.createElement(
                'div',
                null,
                r.a.createElement(
                  l.InputGroup,
                  null,
                  r.a.createElement(
                    l.InputGroupAddon,
                    { addonType: 'prepend' },
                    r.a.createElement(l.Button, null, "I'm a button")
                  ),
                  r.a.createElement(l.Input, null)
                ),
                r.a.createElement('br', null),
                r.a.createElement(
                  l.InputGroup,
                  null,
                  r.a.createElement(l.Input, null),
                  r.a.createElement(
                    l.InputGroupButtonDropdown,
                    { addonType: 'append', isOpen: this.state.dropdownOpen, toggle: this.toggleDropDown },
                    r.a.createElement(l.DropdownToggle, { caret: !0 }, 'Button Dropdown'),
                    r.a.createElement(
                      l.DropdownMenu,
                      null,
                      r.a.createElement(l.DropdownItem, { header: !0 }, 'Header'),
                      r.a.createElement(l.DropdownItem, { disabled: !0 }, 'Action'),
                      r.a.createElement(l.DropdownItem, null, 'Another Action'),
                      r.a.createElement(l.DropdownItem, { divider: !0 }),
                      r.a.createElement(l.DropdownItem, null, 'Another Action')
                    )
                  )
                ),
                r.a.createElement('br', null),
                r.a.createElement(
                  l.InputGroup,
                  null,
                  r.a.createElement(
                    l.InputGroupButtonDropdown,
                    { addonType: 'prepend', isOpen: this.state.splitButtonOpen, toggle: this.toggleSplit },
                    r.a.createElement(l.Button, { outline: !0 }, 'Split Button'),
                    r.a.createElement(l.DropdownToggle, { split: !0, outline: !0 }),
                    r.a.createElement(
                      l.DropdownMenu,
                      null,
                      r.a.createElement(l.DropdownItem, { header: !0 }, 'Header'),
                      r.a.createElement(l.DropdownItem, { disabled: !0 }, 'Action'),
                      r.a.createElement(l.DropdownItem, null, 'Another Action'),
                      r.a.createElement(l.DropdownItem, { divider: !0 }),
                      r.a.createElement(l.DropdownItem, null, 'Another Action')
                    )
                  ),
                  r.a.createElement(l.Input, { placeholder: 'and...' }),
                  r.a.createElement(
                    l.InputGroupAddon,
                    { addonType: 'append' },
                    r.a.createElement(l.Button, { color: 'secondary' }, "I'm a button")
                  )
                )
              )
            }
          }
        ]) && p(n.prototype, o),
        c && p(n, c),
        t
      )
    })()
  }
})
//# sourceMappingURL=63.ccbbd496.chunk.js.map
