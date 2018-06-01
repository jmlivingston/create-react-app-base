import React, { Component, Fragment } from 'react'
import { Button } from 'components/Common'

import GlobalImporter from 'components/Global/GlobalImporter'

export default class LocalizationTester extends Component {
  render() {
    return (
      <GlobalImporter
        stringName="localizationTester"
        render={({ strings, user }) => (
          <Fragment>
            <Button>
              {strings.hello} {user.firstName} {user.lastName}
            </Button>
            <Button>{strings.hello2}</Button>
          </Fragment>
        )}
      />
    )
  }
}
