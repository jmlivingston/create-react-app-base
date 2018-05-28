import React, { Component } from 'react'
import { Button } from '../common'

import LanguageImporter from '../global/LanguageImporter'

export default class Tester extends Component {
  render() {
    return (
      <LanguageImporter
        languagePath="tester"
        componentName="Tester"
        render={strings => (
          <div className="container-fluid">
            <Button>{strings.hello}</Button>
            <Button>{strings.hello2}</Button>
          </div>
        )}
      />
    )
  }
}
