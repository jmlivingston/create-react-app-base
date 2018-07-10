import React from 'react'
import ReactDOM from 'react-dom'
import MediaNested from './MediaNested'

it('MediaNested - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MediaNested />, div)
  ReactDOM.unmountComponentAtNode(div)
})
