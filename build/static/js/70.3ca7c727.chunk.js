webpackJsonp([70], {
  242: function(e, t, a) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      a.d(t, 'default', function() {
        return u
      })
    var l = a(0),
      n = a.n(l),
      r = a(30)
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
      for (var a = 0; a < t.length; a++) {
        var l = t[a]
        ;(l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          'value' in l && (l.writable = !0),
          Object.defineProperty(e, l.key, l)
      }
    }
    function m(e, t) {
      return !t || ('object' !== o(t) && 'function' !== typeof t)
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
          m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var a, l, o
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, n.a.Component),
        (a = t),
        (l = [
          {
            key: 'render',
            value: function() {
              return n.a.createElement(
                r.Form,
                null,
                n.a.createElement(
                  r.FormGroup,
                  null,
                  n.a.createElement(r.Label, { for: 'exampleEmailFormDefault' }, 'Email'),
                  n.a.createElement(r.Input, {
                    type: 'email',
                    name: 'email',
                    id: 'exampleEmailFormDefault',
                    placeholder: 'with a placeholder'
                  })
                ),
                n.a.createElement(
                  r.FormGroup,
                  null,
                  n.a.createElement(r.Label, { for: 'examplePasswordFormDefault' }, 'Password'),
                  n.a.createElement(r.Input, {
                    type: 'password',
                    name: 'password',
                    id: 'examplePasswordFormDefault',
                    placeholder: 'password placeholder'
                  })
                ),
                n.a.createElement(
                  r.FormGroup,
                  null,
                  n.a.createElement(r.Label, { for: 'exampleSelectFormDefault1' }, 'Select'),
                  n.a.createElement(
                    r.Input,
                    { type: 'select', name: 'select', id: 'exampleSelectFormDefault1' },
                    n.a.createElement('option', null, '1'),
                    n.a.createElement('option', null, '2'),
                    n.a.createElement('option', null, '3'),
                    n.a.createElement('option', null, '4'),
                    n.a.createElement('option', null, '5')
                  )
                ),
                n.a.createElement(
                  r.FormGroup,
                  null,
                  n.a.createElement(r.Label, { for: 'exampleSelectMultiFormDefault' }, 'Select Multiple'),
                  n.a.createElement(
                    r.Input,
                    { type: 'select', name: 'selectMulti', id: 'exampleSelectMultiFormDefault', multiple: !0 },
                    n.a.createElement('option', null, '1'),
                    n.a.createElement('option', null, '2'),
                    n.a.createElement('option', null, '3'),
                    n.a.createElement('option', null, '4'),
                    n.a.createElement('option', null, '5')
                  )
                ),
                n.a.createElement(
                  r.FormGroup,
                  null,
                  n.a.createElement(r.Label, { for: 'exampleTextFormDefault' }, 'Text Area'),
                  n.a.createElement(r.Input, { type: 'textarea', name: 'text', id: 'exampleTextFormDefault' })
                ),
                n.a.createElement(
                  r.FormGroup,
                  null,
                  n.a.createElement(r.Label, { for: 'exampleFileFormDefault' }, 'File'),
                  n.a.createElement(r.Input, { type: 'file', name: 'file', id: 'exampleFileFormDefault' }),
                  n.a.createElement(
                    r.FormText,
                    { color: 'muted' },
                    "This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."
                  )
                ),
                n.a.createElement(
                  r.FormGroup,
                  { tag: 'fieldset' },
                  n.a.createElement('legend', null, 'Radio Buttons'),
                  n.a.createElement(
                    r.FormGroup,
                    { check: !0 },
                    n.a.createElement(
                      r.Label,
                      { check: !0 },
                      n.a.createElement(r.Input, { type: 'radio', name: 'radio1' }),
                      " Option one is this and that\u2014be sure to include why it's great"
                    )
                  ),
                  n.a.createElement(
                    r.FormGroup,
                    { check: !0 },
                    n.a.createElement(
                      r.Label,
                      { check: !0 },
                      n.a.createElement(r.Input, { type: 'radio', name: 'radio1' }),
                      ' Option two can be something else and selecting it will deselect option one'
                    )
                  ),
                  n.a.createElement(
                    r.FormGroup,
                    { check: !0, disabled: !0 },
                    n.a.createElement(
                      r.Label,
                      { check: !0 },
                      n.a.createElement(r.Input, { type: 'radio', name: 'radio1', disabled: !0 }),
                      ' Option three is disabled'
                    )
                  )
                ),
                n.a.createElement(
                  r.FormGroup,
                  { check: !0 },
                  n.a.createElement(
                    r.Label,
                    { check: !0 },
                    n.a.createElement(r.Input, { type: 'checkbox' }),
                    ' Check me out'
                  )
                ),
                n.a.createElement(r.Button, null, 'Submit')
              )
            }
          }
        ]) && c(a.prototype, l),
        o && c(a, o),
        t
      )
    })()
  }
})
//# sourceMappingURL=70.3ca7c727.chunk.js.map
