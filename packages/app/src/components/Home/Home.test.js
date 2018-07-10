import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'

it('Home - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Home strings={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
