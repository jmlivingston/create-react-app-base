import React, { PureComponent, Fragment } from 'react'
import { Button } from 'components/Common'

import GlobalImporter from 'components/Global/GlobalImporter'

export default class LocalizationTester extends PureComponent {
  render() {
    return (
      <GlobalImporter
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
