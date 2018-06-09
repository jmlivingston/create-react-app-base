import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Error from './Error'

const TodoForm = ({ error, change, submit, todo }) => {
  const inputChange = e => {
    change({ text: e.target.value })
  }
  const submitTodo = e => {
    e.preventDefault()
    submit()
  }
  return (
    <Fragment>
      <form className="form-inline" onSubmit={submitTodo}>
        <input className="form-control" value={todo.text} onChange={inputChange} />
        <input className="form-control" value={todo.completed} onChange={inputChange} />
        <button className="btn btn-primary ml-1" type="submit" disabled={!todo.text}>
          Add
        </button>
      </form>
      <Error error={error} />
    </Fragment>
  )
}

TodoForm.propTypes = {
  change: PropTypes.func, 
  error: PropTypes.string, 
  submit: PropTypes.func, 
  todo: PropTypes.object
}

export default TodoForm
