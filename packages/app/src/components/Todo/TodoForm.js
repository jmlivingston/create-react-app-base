import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Button, Form, FormGroup, Input, Label } from '@myorg/components'

class TodoForm extends Component {
  defaultTodo = { name: '', isComplete: false }

  state = { todo: { ...this.defaultTodo } }

  static propTypes = {
    submit: PropTypes.func
  }

  inputChange(target) {
    this.setState(prevState => ({
      ...prevState,
      todo: {
        ...prevState.todo,
        [target.name]: target.type === 'checkbox' ? target.checked : target.value
      }
    }))
  }

  submitTodo = e => {
    e.preventDefault()
    this.props.submit(this.state.todo)
    this.setState({
      todo: { ...this.defaultTodo }
    })
  }

  render() {
    return (
      <Form onSubmit={this.submitTodo}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Name..."
            value={this.state.todo.name}
            onChange={({ target }) => this.inputChange(target)}
          />
        </FormGroup>
        <FormGroup check>
          <Label for="isComplete" check>
            <Input
              name="isComplete"
              type="checkbox"
              value={this.state.todo.isComplete}
              onChange={({ target }) => this.inputChange(target)}
            />Is Complete?
          </Label>
        </FormGroup>
        <Button
          type="submit"
          color="primary"
          disabled={!this.state.todo.name}
          onClick={this.submitTodo}
          className="float-right">
          Add
        </Button>
      </Form>
    )
  }
}

export default TodoForm
