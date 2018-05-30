import React, { Component } from 'react'

import { GlobalContainer } from 'components/Global/GlobalContainer'
import KitchenSink from 'components/KitchenSink/KitchenSink'
import Login from 'components/Auth/Login'
import Tester from 'components/Tester/Tester'
import LanguageSelector from 'components/Global/LanguageSelector'
import ThemeSelector from 'components/Global/ThemeSelector'
import ThemeImporter from 'components/Global/ThemeImporter'

class App extends Component {
  state = {
    dropdownOpen: false
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <GlobalContainer>
        <ThemeImporter>
          <div className="container-fluid">
            <div className="float-right pt-2 pb-2">
              <ThemeSelector />
              <LanguageSelector />
            </div>
            <div className="clearfix" />
          </div>
          <Login />
          <Tester />
          <KitchenSink />
        </ThemeImporter>
      </GlobalContainer>
    )
  }
}

export default App
