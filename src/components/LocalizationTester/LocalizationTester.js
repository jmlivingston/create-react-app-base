import React, { PureComponent, Fragment } from 'react'
import { Button } from 'components/Common'

import GlobalImporter from 'components/Global/GlobalImporter'

class LocalizationTester extends PureComponent {
  render() {
    return (
      <GlobalImporter
        stringNames={['localizationTester']}
        render={({ strings, user }) => (
          <Fragment>
            <Button>
              {strings.hello} {user.get().firstName} {user.get().lastName}
            </Button>
            <Button>{strings.hello2}</Button>
          </Fragment>
        )}
      />
    )
  }
}

export default LocalizationTester
