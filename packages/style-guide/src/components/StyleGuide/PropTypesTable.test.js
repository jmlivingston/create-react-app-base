import React from 'react'
import ReactDOM from 'react-dom'
import PropTypesTable from './PropTypesTable'

it('PropTypesTable - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PropTypesTable componentPropTypes={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
