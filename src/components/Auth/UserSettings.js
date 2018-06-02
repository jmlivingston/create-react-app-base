import React, { Fragment } from 'react'

import { Form, FormGroup, Label } from 'components/Common'
import GlobalImporter from 'components/Global/GlobalImporter'
import LanguageSelector from 'components/Global/LanguageSelector'
import ThemeSelector from 'components/Global/ThemeSelector'

const UserSettings = () => {
  return (
    <GlobalImporter
      stringNames={['userSettings']}
      render={({ strings, user }) => (
        <Fragment>
          <h1>{strings.userSettings}</h1>
          <Form>
            <FormGroup>
              <Label>{strings.language}</Label>
              <LanguageSelector nav={false} right={false} />
            </FormGroup>
            <FormGroup>
              <Label>{strings.theme}</Label>
              <ThemeSelector />
            </FormGroup>
          </Form>
        </Fragment>
      )}
    />
  )
}

export default UserSettings

// User Settings - Name, Email, Password, Language, Theme
