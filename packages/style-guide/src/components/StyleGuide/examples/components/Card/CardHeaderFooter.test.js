import React from 'react'
import ReactDOM from 'react-dom'
import CardHeaderFooter from './CardHeaderFooter'

it('CardHeaderFooter - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardHeaderFooter />, div)
  ReactDOM.unmountComponentAtNode(div)
})
