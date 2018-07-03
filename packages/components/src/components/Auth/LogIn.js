import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { Alert, Button, Form, FormGroup, Input, Label } from '../../components/Common'
import GlobalContainerContext from '../../components/Global/GlobalContainerContext'
import GlobalImporter from '../../components/Global/GlobalImporter'

class LogIn extends PureComponent {
  defaultState = {
    email: '',
    password: '',
    userIsValid: true
  }

  state = {
    ...this.defaultState
  }

  static propTypes = {
    onLoggedIn: PropTypes.func
  }

  onChange(input) {
    this.setState({
      [input.target.name]: input.target.value
    })
  }

  logIn = async context => {
    const userValid = await context.auth.logIn({ email: this.state.email, password: this.state.password })
    if (userValid) {
      this.setState({
        ...this.defaultState
      })
      this.props.onLoggedIn()
    } else {
      this.setState({
        userIsValid: false
      })
    }
  }

  passworkKeyDown(input, context) {
    if (input.key === 'Enter') {
      this.logIn(context)
    }
  }

  render() {
    return (
      <GlobalImporter
        appName="components"
        stringNames={['auth']}
        render={({ strings, user }) => (
          <GlobalContainerContext.Consumer>
            {context => {
              return !context.user.email ? (
                <Form>
                  <FormGroup>
                    <Label for="inputEmail">{strings.email}</Label>
                    <Input
                      autoFocus
                      type="email"
                      name="email"
                      id="inputEmail"
                      placeholder={strings.email}
                      required
                      value={this.state.email}
                      onChange={input => this.onChange(input)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="inputPassword">{strings.password}</Label>
                    <Input
                      type="password"
                      name="password"
                      id="inputPassword"
                      placeholder={strings.password}
                      required
                      value={this.state.password}
                      onChange={input => this.onChange(input)}
                      onKeyDown={input => this.passworkKeyDown(input, context)}
                    />
                  </FormGroup>
                  {/* <FormGroup check>
                    <Label check>
                      <Input type="checkbox" /> {strings.remember}
                    </Label>
                  </FormGroup> */}
                  <Button block={true} className="mt-3" color="primary" onClick={() => this.logIn(context)}>
                    {strings.logIn}
                  </Button>
                  {this.state.userIsValid === false && (
                    <Alert color="danger" className="mt-3">
                      {strings.userNamePasswordInvalid}
                    </Alert>
                  )}
                </Form>
              ) : (
                <div className="text-center">
                  <Button onClick={() => context.auth.logOut()}>
                    {strings.logOut} {context.user.firstName} {context.user.lastName}
                  </Button>
                </div>
              )
            }}
          </GlobalContainerContext.Consumer>
        )}
      />
    )
  }
}

export default LogIn
