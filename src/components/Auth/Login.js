import { Alert, Button, Form, FormGroup, Input, Label } from 'components/Common'
import React, { PureComponent } from 'react'

import { GlobalContainerContext } from 'components/Global/GlobalContainer'
import GlobalImporter from 'components/Global/GlobalImporter'

import './Login.scss'

class Login extends PureComponent {
  state = {
    email: '',
    password: ''
  }

  onChange(input) {
    this.setState({
      [input.target.name]: input.target.value
    })
  }

  login = async context => {
    const userValid = await context.state.login({ email: this.state.email, password: this.state.password })
    if (userValid) {
      this.setState({
        email: '',
        password: ''
      })
    }
  }

  passworkKeyDown(input, context) {
    if (input.key === 'Enter') {
      this.login(context)
    }
  }

  render() {
    return (
      <GlobalImporter
        stringNames={['auth']}
        render={({ strings, user }) => (
          <GlobalContainerContext.Consumer>
            {context => {
              return !context.state.user.isAuthenticated ? (
                <Form>
                  <FormGroup>
                    <Label for="inputEmail">{strings.email}</Label>
                    <Input
                      type="email"
                      name="email"
                      id="inputEmail"
                      placeholder={strings.email}
                      required=""
                      autoFocus=""
                      value={this.state.email}
                      onChange={e => this.onChange(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="inputPassword">{strings.password}</Label>
                    <Input
                      type="password"
                      name="password"
                      id="inputPassword"
                      placeholder={strings.password}
                      required=""
                      value={this.state.password}
                      onChange={e => this.onChange(e)}
                      onKeyDown={e => this.passworkKeyDown(e, context)}
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" value="remember-me" /> {strings.remember}
                    </Label>
                  </FormGroup>
                  <Button block={true} className="mt-3" color="primary" onClick={() => this.login(context)}>
                    {strings.logIn}
                  </Button>
                  {context.state.userIsValid === false && (
                    <Alert color="danger" className="mt-3">
                      {strings.userNamePasswordInvalid}
                    </Alert>
                  )}
                </Form>
              ) : (
                <div className="text-center">
                  <Button onClick={() => context.state.logOut()}>
                    {strings.logOut} {context.state.user.firstName} {context.state.user.lastName}
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

export default Login
