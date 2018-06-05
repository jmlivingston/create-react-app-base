webpackJsonp([227], {
  50: function(e, t, n) {
    'use strict'
    var r = n(0),
      o = n.n(r),
      a = n(30),
      l = n(35)
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
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function s(e, t) {
      return !t || ('object' !== u(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var c = (function(e) {
      function t() {
        var e, n, r
        !(function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        })(this, t)
        for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l]
        return s(
          r,
          ((n = r = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
          (r.state = {}),
          n)
        )
      }
      var n, u, c
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, r['PureComponent']),
        (n = t),
        (u = [
          {
            key: 'toggle',
            value: function() {
              this.setState(function(e) {
                return { dropdownOpen: !e.dropdownOpen }
              })
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this
              return o.a.createElement(l.b.Consumer, null, function(t) {
                return o.a.createElement(
                  a.Dropdown,
                  {
                    isOpen: e.state.dropdownOpen,
                    toggle: function() {
                      return e.toggle()
                    },
                    nav: e.props.nav,
                    inNavbar: !0
                  },
                  o.a.createElement(
                    a.DropdownToggle,
                    { nav: e.props.nav, caret: !0 },
                    t.state.user.language.toUpperCase()
                  ),
                  o.a.createElement(
                    a.DropdownMenu,
                    { right: e.props.right },
                    o.a.createElement(
                      a.DropdownItem,
                      {
                        onClick: function() {
                          return t.state.updateUserByPropertyValue('language', 'en')
                        }
                      },
                      'English'
                    ),
                    o.a.createElement(
                      a.DropdownItem,
                      {
                        onClick: function() {
                          return t.state.updateUserByPropertyValue('language', 'ja')
                        }
                      },
                      'Japanese'
                    )
                  )
                )
              })
            }
          }
        ]) && i(n.prototype, u),
        c && i(n, c),
        t
      )
    })()
    ;(c.defaultProps = { nav: !0, right: !0 }), (t.a = c)
  },
  937: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = n(0),
      o = n.n(r),
      a = n(35),
      l = n(50),
      u = n(30),
      i = n(938)
    function s(e) {
      return (s =
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
    function p(e, t) {
      return !t || ('object' !== s(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var f = (function(e) {
      function t() {
        var e, n, r
        !(function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        })(this, t)
        for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l]
        return p(
          r,
          ((n = r = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
          (r.state = { isOpen: !1 }),
          (r.toggle = function() {
            r.setState(function(e) {
              return { isOpen: !e.isOpen }
            })
          }),
          n)
        )
      }
      var n, s, f
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, r['PureComponent']),
        (n = t),
        (s = [
          {
            key: 'toggleLoginModal',
            value: function() {
              this.setState(function(e) {
                return { isLoginModalOpen: !e.isLoginModalOpen }
              })
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this
              return o.a.createElement(a.b.Consumer, null, function(t) {
                return o.a.createElement(
                  'header',
                  null,
                  o.a.createElement(
                    u.Navbar,
                    { color: 'dark', dark: !0, fixed: 'top', expand: 'md' },
                    o.a.createElement(
                      u.NavbarBrand,
                      { href: e.props.strings.routes.home.path },
                      e.props.strings.routes.home.displayName
                    ),
                    o.a.createElement(u.NavbarToggler, {
                      onClick: function() {
                        return e.toggle()
                      }
                    }),
                    o.a.createElement(
                      u.Collapse,
                      { isOpen: e.state.isOpen, navbar: !0, timeout: 0 },
                      o.a.createElement(
                        u.Nav,
                        { className: 'ml-auto', navbar: !0 },
                        o.a.createElement(
                          u.NavItem,
                          null,
                          o.a.createElement(
                            u.NavLink,
                            { href: e.props.strings.routes.about.path },
                            e.props.strings.routes.about.displayName
                          )
                        ),
                        o.a.createElement(
                          u.NavItem,
                          null,
                          o.a.createElement(
                            u.NavLink,
                            { href: e.props.strings.routes.styleGuide.path },
                            e.props.strings.routes.styleGuide.displayName
                          )
                        ),
                        o.a.createElement(
                          u.NavItem,
                          null,
                          o.a.createElement(
                            u.NavLink,
                            { href: e.props.strings.routes.todo.path },
                            e.props.strings.routes.todo.displayName
                          )
                        ),
                        e.props.user.firstName
                          ? o.a.createElement(
                              u.UncontrolledDropdown,
                              { nav: !0, inNavbar: !0 },
                              o.a.createElement(
                                u.DropdownToggle,
                                { nav: !0, caret: !0 },
                                e.props.user.firstName,
                                ' ',
                                e.props.user.lastName
                              ),
                              o.a.createElement(
                                u.DropdownMenu,
                                { right: !0 },
                                o.a.createElement(
                                  u.DropdownItem,
                                  { href: e.props.strings.routes.userSettings.path },
                                  e.props.strings.routes.userSettings.displayName
                                ),
                                o.a.createElement(u.DropdownItem, { divider: !0 }),
                                o.a.createElement(
                                  u.DropdownItem,
                                  {
                                    onClick: function() {
                                      return t.state.logOut()
                                    }
                                  },
                                  e.props.strings.logOut
                                )
                              )
                            )
                          : o.a.createElement(
                              u.NavItem,
                              null,
                              o.a.createElement(
                                'span',
                                {
                                  className: 'nav-link cursor-pointer',
                                  onClick: function() {
                                    return e.toggleLoginModal()
                                  }
                                },
                                e.props.strings.logIn
                              )
                            ),
                        o.a.createElement(l.a, null)
                      )
                    )
                  ),
                  '`',
                  o.a.createElement(
                    u.Modal,
                    {
                      isOpen: e.state.isLoginModalOpen,
                      toggle: function() {
                        return e.toggleLoginModal()
                      }
                    },
                    o.a.createElement(
                      u.ModalHeader,
                      {
                        toggle: function() {
                          return e.toggleLoginModal()
                        }
                      },
                      e.props.strings.logIn
                    ),
                    o.a.createElement(u.ModalBody, null, o.a.createElement(i.a, null))
                  )
                )
              })
            }
          }
        ]) && c(n.prototype, s),
        f && c(n, f),
        t
      )
    })()
    t.default = f
  },
  938: function(e, t, n) {
    'use strict'
    var r = n(42),
      o = n.n(r),
      a = n(30),
      l = n(0),
      u = n.n(l),
      i = n(35),
      s = n(36)
    function c(e) {
      return (c =
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
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function f(e, t) {
      return !t || ('object' !== c(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var m = (function(e) {
      function t() {
        var e, n, r
        !(function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        })(this, t)
        for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++) l[u] = arguments[u]
        return f(
          r,
          ((n = r = f(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l)))),
          (r.state = { email: '', password: '' }),
          (r.login = (function() {
            var e,
              t = ((e = o.a.mark(function e(t) {
                return o.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t.state.login({ email: r.state.email, password: r.state.password })
                        case 2:
                          e.sent && r.setState({ email: '', password: '' })
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this
                )
              })),
              function() {
                var t = this,
                  n = arguments
                return new Promise(function(r, o) {
                  var a = e.apply(t, n)
                  function l(e, t) {
                    try {
                      var n = a[e](t),
                        l = n.value
                    } catch (e) {
                      return void o(e)
                    }
                    n.done ? r(l) : Promise.resolve(l).then(u, i)
                  }
                  function u(e) {
                    l('next', e)
                  }
                  function i(e) {
                    l('throw', e)
                  }
                  u()
                })
              })
            return function(e) {
              return t.apply(this, arguments)
            }
          })()),
          n)
        )
      }
      var n, r, c
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, l['PureComponent']),
        (n = t),
        (r = [
          {
            key: 'onChange',
            value: function(e) {
              var t, n, r
              this.setState(
                ((t = {}),
                (n = e.target.name),
                (r = e.target.value),
                n in t
                  ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                  : (t[n] = r),
                t)
              )
            }
          },
          {
            key: 'passworkKeyDown',
            value: function(e, t) {
              'Enter' === e.key && this.login(t)
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this
              return u.a.createElement(s.a, {
                stringNames: ['auth'],
                render: function(t) {
                  var n = t.strings
                  t.user
                  return u.a.createElement(i.b.Consumer, null, function(t) {
                    return t.state.user.isAuthenticated
                      ? u.a.createElement(
                          'div',
                          { className: 'text-center' },
                          u.a.createElement(
                            a.Button,
                            {
                              onClick: function() {
                                return t.state.logOut()
                              }
                            },
                            n.logOut,
                            ' ',
                            t.state.user.firstName,
                            ' ',
                            t.state.user.lastName
                          )
                        )
                      : u.a.createElement(
                          a.Form,
                          null,
                          u.a.createElement(
                            a.FormGroup,
                            null,
                            u.a.createElement(a.Label, { for: 'inputEmail' }, n.email),
                            u.a.createElement(a.Input, {
                              type: 'email',
                              name: 'email',
                              id: 'inputEmail',
                              placeholder: n.email,
                              required: '',
                              autoFocus: '',
                              value: e.state.email,
                              onChange: function(t) {
                                return e.onChange(t)
                              }
                            })
                          ),
                          u.a.createElement(
                            a.FormGroup,
                            null,
                            u.a.createElement(a.Label, { for: 'inputPassword' }, n.password),
                            u.a.createElement(a.Input, {
                              type: 'password',
                              name: 'password',
                              id: 'inputPassword',
                              placeholder: n.password,
                              required: '',
                              value: e.state.password,
                              onChange: function(t) {
                                return e.onChange(t)
                              },
                              onKeyDown: function(n) {
                                return e.passworkKeyDown(n, t)
                              }
                            })
                          ),
                          u.a.createElement(
                            a.FormGroup,
                            { check: !0 },
                            u.a.createElement(
                              a.Label,
                              { check: !0 },
                              u.a.createElement(a.Input, { type: 'checkbox', value: 'remember-me' }),
                              ' ',
                              n.remember
                            )
                          ),
                          u.a.createElement(
                            a.Button,
                            {
                              block: !0,
                              className: 'mt-3',
                              color: 'primary',
                              onClick: function() {
                                return e.login(t)
                              }
                            },
                            n.logIn
                          ),
                          !1 === t.state.userIsValid &&
                            u.a.createElement(
                              a.Alert,
                              { color: 'danger', className: 'mt-3' },
                              n.userNamePasswordInvalid
                            )
                        )
                  })
                }
              })
            }
          }
        ]) && p(n.prototype, r),
        c && p(n, c),
        t
      )
    })()
    t.a = m
  }
})
//# sourceMappingURL=227.bdd2cce8.chunk.js.map
