import React from 'react'
import ReactDOM from 'react-dom'
import TodoContainer from './TodoContainer'

it('TodoContainer - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TodoContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})
