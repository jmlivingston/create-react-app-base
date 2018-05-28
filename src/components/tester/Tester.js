import React, { Component } from 'react'
import { Button } from 'components/common'

import GlobalImporter from 'components/global/GlobalImporter'

export default class Tester extends Component {
  render() {
    return (
      <GlobalImporter
        languagePath="tester"
        componentName="Tester"
        render={({ strings, user }) => (
          <div className="container-fluid">
            <Button>
              {strings.hello} {user.firstName} {user.lastName}
            </Button>
            <Button>{strings.hello2}</Button>
          </div>
        )}
      />
    )
  }
}
