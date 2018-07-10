import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

// TODO
it.skip('Header - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header strings={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
