import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'

it('TodoList - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TodoList onClick={() => {}} todos={[]} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
