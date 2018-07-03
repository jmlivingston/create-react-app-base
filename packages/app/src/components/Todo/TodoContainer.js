import React, { PureComponent } from 'react'

import { ErrorContainer, GlobalImporter } from '@myorg/components'
import { API, data } from '@myorg/core'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class TodoContainer extends PureComponent {
  state = {
    isLoaded: false,
    todos: []
  }

  add = async todo => {
    const todoResponse = await data.post(API.TODO.BASE, todo)
    if (todoResponse.response.ok) {
      this.setState(prevState => ({
        todos: [...prevState.todos, { ...todo, ...todoResponse.data }]
      }))
    }
  }

  update = async todo => {
    const todoResponse = await data.put(`${API.TODO.BASE}/${todo.id}`, todo)
    if (todoResponse.response.ok) {
      this.setState(prevState => ({
        todos: prevState.todos.map(t => (t.id === todo.id ? todo : t))
      }))
    }
  }

  bindData = async () => {
    const todosResponse = await data.get(API.TODO.BASE)
    if (todosResponse.response.ok) {
      this.setState({
        isLoaded: true,
        todos: todosResponse.data
      })
    } else {
      this.setState({
        isLoaded: true,
        error: todosResponse
      })
    }
  }

  componentDidMount() {
    this.bindData()
  }

  render() {
    return (
      <GlobalImporter
        appName="app"
        stringNames={['todo']}
        render={({ strings }) => (
          <ErrorContainer isLoaded={this.state.isLoaded} error={this.state.error}>
            <h1>Todo List</h1>
            <TodoList todos={this.state.todos || []} onClick={this.update} />
            <TodoForm submit={this.add} />
          </ErrorContainer>
        )}
      />
    )
  }
}

export default TodoContainer
