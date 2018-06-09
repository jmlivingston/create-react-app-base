import PropTypes from 'prop-types'
import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, onClick }) => (
  <ul className="mt-2">
    {todos.map(todo => (
      <li key={todo.id} onClick={onClick}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
)

TodoList.propTypes = {
  onClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      completed: PropTypes.bool,
      createdDate: PropTypes.string,
      modifiedDate: PropTypes.string
    }).isRequired
  ).isRequired
}

export default TodoList
