import PropTypes from 'prop-types'
import React from 'react'

import todo from 'models/todo'
import Todo from './Todo'

const TodoList = ({ todos, onClick }) => (
  <ul className="mt-2">
    {todos.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase()).map(todo => (
      <li key={todo.id} onClick={() => onClick({ ...todo, isComplete: !todo.isComplete })}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
)

TodoList.propTypes = {
  onClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(todo).isRequired
}

export default TodoList
