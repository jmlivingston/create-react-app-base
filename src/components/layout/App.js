import React, { Component } from 'react'

import { GlobalContainer } from 'components/global/GlobalContainer'
// import KitchenSink from 'components/kitchenSink/KitchenSink'
import Login from 'components/auth/Login'
import Tester from 'components/tester/Tester'
import LanguageSelector from 'components/global/LanguageSelector'
import ThemeSelector from 'components/global/ThemeSelector'
import ThemeImporter from 'components/global/ThemeImporter'

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
          {/* <KitchenSink /> */}
        </ThemeImporter>
      </GlobalContainer>
    )
  }
}

export default App
