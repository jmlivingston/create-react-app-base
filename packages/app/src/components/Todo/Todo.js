import React from 'react'

import { todo } from '@myorg/models'

const Todo = ({ todo }) => {
  return (
    <span style={{ textDecoration: todo.isComplete ? 'line-through' : 'none', cursor: 'pointer' }}>{todo.name}</span>
  )
}

Todo.propTypes = {
  todo
}

export default Todo
