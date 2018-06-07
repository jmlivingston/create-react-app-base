import React, { PureComponent } from 'react'
import { Loader } from 'components/Common'

import dataHelper from 'helpers/dataHelper'
import API from 'config/apiConstants'

import TodoList from 'components/Todo/TodoList'

class TodoContainer extends PureComponent {
  state = {
    todos: {}
  }

  bindData = async () => {
    const todos = await dataHelper.get(API.TODOS.BASE)
    this.setState({
      todos
    })
  }

  componentDidMount() {
    this.bindData()
  }

  render() {
    return (
      <Loader data={this.state.todos.data}>
        <TodoList todos={this.state.todos.data || []} onClick={() => {}} />
      </Loader>
    )
  }
}

export default TodoContainer
