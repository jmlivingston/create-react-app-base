import React, { PureComponent, Fragment } from 'react'
import { Button } from '../Common'

import GlobalImporter from '../Global/GlobalImporter'

class LocalizationTester extends PureComponent {
  render() {
    return (
      <GlobalImporter
        appName="components"
        stringNames={['localizationTester']}
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

export default LocalizationTester
