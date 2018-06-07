import PropTypes from 'prop-types'
import React from 'react'

const Todo = ({ todo }) => {
  return (
    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}>{todo.name}</span>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    completed: PropTypes.bool,
    createdDate: PropTypes.string,
    modifiedDate: PropTypes.string
  })
}

export default Todo
