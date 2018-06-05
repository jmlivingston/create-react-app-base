webpackJsonp([68], {
  244: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      r.d(t, 'default', function() {
        return i
      })
    var a = r(0),
      o = r.n(a),
      l = r(30)
    function n(e) {
      return (n =
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
      for (var r = 0; r < t.length; r++) {
        var a = t[r]
        ;(a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a)
      }
    }
    function m(e, t) {
      return !t || ('object' !== n(t) && 'function' !== typeof t)
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
          m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var r, a, n
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, o.a.Component),
        (r = t),
        (a = [
          {
            key: 'render',
            value: function() {
              return o.a.createElement(
                l.Form,
                null,
                o.a.createElement(
                  l.FormGroup,
                  { row: !0 },
                  o.a.createElement(l.Label, { for: 'exampleEmailFormGrid', sm: 2 }, 'Email'),
                  o.a.createElement(
                    l.Col,
                    { sm: 10 },
                    o.a.createElement(l.Input, {
                      type: 'email',
                      name: 'email',
                      id: 'exampleEmailFormGrid',
                      placeholder: 'with a placeholder'
                    })
                  )
                ),
                o.a.createElement(
                  l.FormGroup,
                  { row: !0 },
                  o.a.createElement(l.Label, { for: 'examplePasswordFormGrid', sm: 2 }, 'Password'),
                  o.a.createElement(
                    l.Col,
                    { sm: 10 },
                    o.a.createElement(l.Input, {
                      type: 'password',
                      name: 'password',
                      id: 'examplePasswordFormGrid',
                      placeholder: 'password placeholder'
                    })
                  )
                ),
                o.a.createElement(
                  l.FormGroup,
                  { row: !0 },
                  o.a.createElement(l.Label, { for: 'exampleSelectFormGrid', sm: 2 }, 'Select'),
                  o.a.createElement(
                    l.Col,
                    { sm: 10 },
                    o.a.createElement(l.Input, { type: 'select', name: 'select', id: 'exampleSelectFormGrid' })
                  )
                ),
                o.a.createElement(
                  l.FormGroup,
                  { row: !0 },
                  o.a.createElement(l.Label, { for: 'exampleSelectMultiFormGrid', sm: 2 }, 'Select Multiple'),
                  o.a.createElement(
                    l.Col,
                    { sm: 10 },
                    o.a.createElement(l.Input, {
                      type: 'select',
                      name: 'selectMulti',
                      id: 'exampleSelectMultiFormGrid',
                      multiple: !0
                    })
                  )
                ),
                o.a.createElement(
                  l.FormGroup,
                  { row: !0 },
                  o.a.createElement(l.Label, { for: 'exampleTextFormGrid', sm: 2 }, 'Text Area'),
                  o.a.createElement(
                    l.Col,
                    { sm: 10 },
                    o.a.createElement(l.Input, { type: 'textarea', name: 'text', id: 'exampleTextFormGrid' })
                  )
                ),
                o.a.createElement(
                  l.FormGroup,
                  { row: !0 },
                  o.a.createElement(l.Label, { for: 'exampleFileFormGrid', sm: 2 }, 'File'),
                  o.a.createElement(
                    l.Col,
                    { sm: 10 },
                    o.a.createElement(l.Input, { type: 'file', name: 'file', id: 'exampleFileFormGrid' }),
                    o.a.createElement(
                      l.FormText,
                      { color: 'muted' },
                      "This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."
                    )
                  )
                ),
                o.a.createElement(
                  l.FormGroup,
                  { tag: 'fieldset', row: !0 },
                  o.a.createElement('legend', { className: 'col-form-label col-sm-2' }, 'Radio Buttons'),
                  o.a.createElement(
                    l.Col,
                    { sm: 10 },
                    o.a.createElement(
                      l.FormGroup,
                      { check: !0 },
                      o.a.createElement(
                        l.Label,
                        { check: !0 },
                        o.a.createElement(l.Input, { type: 'radio', name: 'radio2' }),
                        " Option one is this and that\u2014be sure to include why it's great"
                      )
                    ),
                    o.a.createElement(
                      l.FormGroup,
                      { check: !0 },
                      o.a.createElement(
                        l.Label,
                        { check: !0 },
                        o.a.createElement(l.Input, { type: 'radio', name: 'radio2' }),
                        ' Option two can be something else and selecting it will deselect option one'
                      )
                    ),
                    o.a.createElement(
                      l.FormGroup,
                      { check: !0, disabled: !0 },
                      o.a.createElement(
                        l.Label,
                        { check: !0 },
                        o.a.createElement(l.Input, { type: 'radio', name: 'radio2', disabled: !0 }),
                        ' Option three is disabled'
                      )
                    )
                  )
                ),
                o.a.createElement(
                  l.FormGroup,
                  { row: !0 },
                  o.a.createElement(l.Label, { for: 'checkbox2', sm: 2 }, 'Checkbox'),
                  o.a.createElement(
                    l.Col,
                    { sm: { size: 10 } },
                    o.a.createElement(
                      l.FormGroup,
                      { check: !0 },
                      o.a.createElement(
                        l.Label,
                        { check: !0 },
                        o.a.createElement(l.Input, { type: 'checkbox', id: 'checkbox2' }),
                        ' Check me out'
                      )
                    )
                  )
                ),
                o.a.createElement(
                  l.FormGroup,
                  { check: !0, row: !0 },
                  o.a.createElement(l.Col, { sm: { size: 10, offset: 2 } }, o.a.createElement(l.Button, null, 'Submit'))
                )
              )
            }
          }
        ]) && c(r.prototype, a),
        n && c(r, n),
        t
      )
    })()
  }
})
//# sourceMappingURL=68.074224c4.chunk.js.map
