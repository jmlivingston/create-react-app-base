import React from 'react'
import ReactDOM from 'react-dom'
import TabsDefault from './TabsDefault'

it('TabsDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TabsDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
