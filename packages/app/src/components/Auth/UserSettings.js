import React, { Fragment, Component } from 'react'

import { Alert, Button, Form, FormGroup, Input, Label, UncontrolledAlert } from '@myorg/components-common'
import { validate } from 'helpers/validation/validatorHelper'
import GlobalContainerContext from 'components/Global/GlobalContainerContext'
import GlobalImporter from 'components/Global/GlobalImporter'
import LanguageSelector from 'components/Global/LanguageSelector'
import ThemeSelector from 'components/Global/ThemeSelector'
import userValidationRules from 'helpers/validation/rules/userValidationRules'

let updateUserResponse = {}

class UserSettings extends Component {
  state = {
    user: {},
    valid: {
      form: true
    }
  }

  static getDerivedStateFromProps = nextProps => ({
    ...nextProps,
    updateUserResponse
  })

  submit = async context => {
    const valid = validate(this.state.user, userValidationRules)
    this.setState({
      valid
    })
    if (valid.form) {
      updateUserResponse = await context.auth.updateUser(this.state.user)
    }
  }

  onChange = ({ target }) => {
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [target.name]: target.value
      }
    }))
  }

  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => (
          <GlobalImporter
            stringNames={['userSettings']}
            render={({ strings, user }) => (
              <Fragment>
                <h1>{strings.userSettings}</h1>
                <Form>
                  {['firstName', 'lastName'].map(property => (
                    <FormGroup key={property}>
                      <Label for={property}>{strings[property]} *</Label>
                      <Input
                        name={property}
                        value={this.state.user[property] !== undefined ? this.state.user[property] : user[property]}
                        onChange={this.onChange}
                        placeholder={strings[property]}
                        invalid={this.state.valid[property]}
                      />
                    </FormGroup>
                  ))}
                  <FormGroup>
                    <Label>{strings.language}</Label>
                    <LanguageSelector
                      value={this.state.user.language || user.language}
                      nav={false}
                      right={false}
                      onChange={language => this.onChange({ target: { name: 'language', value: language } })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>{strings.theme}</Label>
                    <ThemeSelector
                      value={this.state.user.theme || user.theme}
                      nav={false}
                      onChange={theme => this.onChange({ target: { name: 'theme', value: theme } })}
                    />
                  </FormGroup>
                  <Button onClick={async () => this.submit(context)} className="float-right mb-3">
                    {strings.save}
                  </Button>
                  <div className="clearfix" />
                  {!this.state.valid.form && <Alert color="danger">{strings.error}</Alert>}
                  {updateUserResponse.ok &&
                    this.state.valid.form && <UncontrolledAlert color="success">{strings.success}</UncontrolledAlert>}
                </Form>
              </Fragment>
            )}
          />
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default UserSettings
