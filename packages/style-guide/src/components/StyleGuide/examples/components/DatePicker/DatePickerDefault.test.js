import React from 'react'
import ReactDOM from 'react-dom'
import DatePickerDefault from './DatePickerDefault'

it('DatePickerDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DatePickerDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
