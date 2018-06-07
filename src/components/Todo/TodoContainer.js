import React, { PureComponent } from 'react'
import { Loader } from 'components/Common'

import dataHelper from 'helpers/dataHelper'
import API from 'config/apiConstants'

import TodoList from 'components/Todo/TodoList'

class TodoContainer extends PureComponent {
  state = {
    isLoaded: false,
    todos: []
  }

  bindData = async () => {
    const todosResponse = await dataHelper.get(API.TODO.BASE)
    if (todosResponse.ok) {
      this.setState({
        isLoaded: true,
        todos: todosResponse.data
      })
    } else {
      this.setState({
        isLoaded: true,
        error: todosResponse.statusText
      })
    }
  }

  componentDidMount() {
    this.bindData()
  }

  render() {
    return (
      <Loader data={this.state.todos} error={this.state.error} isLoaded={this.state.isLoaded}>
        <TodoList todos={this.state.todos || []} onClick={() => {}} />
      </Loader>
    )
  }
}

export default TodoContainer
