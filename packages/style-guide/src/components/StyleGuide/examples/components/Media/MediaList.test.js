import React from 'react'
import ReactDOM from 'react-dom'
import MediaList from './MediaList'

it('MediaList - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MediaList />, div)
  ReactDOM.unmountComponentAtNode(div)
})
