webpackJsonp([19], {
  293: function(e, r, a) {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 })
    var t = a(0),
      s = a.n(t),
      l = a(30)
    r.default = function(e) {
      return s.a.createElement(
        'div',
        null,
        s.a.createElement('div', { className: 'text-center' }, 'Plain'),
        s.a.createElement(
          l.Progress,
          { multi: !0 },
          s.a.createElement(l.Progress, { bar: !0, value: '15' }),
          s.a.createElement(l.Progress, { bar: !0, color: 'success', value: '20' }),
          s.a.createElement(l.Progress, { bar: !0, color: 'info', value: '25' }),
          s.a.createElement(l.Progress, { bar: !0, color: 'warning', value: '20' }),
          s.a.createElement(l.Progress, { bar: !0, color: 'danger', value: '15' })
        ),
        s.a.createElement('div', { className: 'text-center' }, 'With Labels'),
        s.a.createElement(
          l.Progress,
          { multi: !0 },
          s.a.createElement(l.Progress, { bar: !0, value: '15' }, 'Meh'),
          s.a.createElement(l.Progress, { bar: !0, color: 'success', value: '35' }, 'Wow!'),
          s.a.createElement(l.Progress, { bar: !0, color: 'warning', value: '25' }, '25%'),
          s.a.createElement(l.Progress, { bar: !0, color: 'danger', value: '25' }, 'LOOK OUT!!')
        ),
        s.a.createElement('div', { className: 'text-center' }, 'Stripes and Animations'),
        s.a.createElement(
          l.Progress,
          { multi: !0 },
          s.a.createElement(l.Progress, { bar: !0, striped: !0, value: '15' }, 'Stripes'),
          s.a.createElement(l.Progress, { bar: !0, animated: !0, color: 'success', value: '30' }, 'Animated Stripes'),
          s.a.createElement(l.Progress, { bar: !0, color: 'info', value: '25' }, 'Plain')
        )
      )
    }
  }
})
//# sourceMappingURL=19.98ee1e72.chunk.js.map
