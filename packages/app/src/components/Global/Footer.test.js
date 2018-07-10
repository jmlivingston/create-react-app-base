import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'

it('Footer - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer strings={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
