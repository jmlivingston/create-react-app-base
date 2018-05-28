import React, { Component } from 'react'

import { GlobalContainer } from '../global/GlobalContainer'
// import KitchenSink from '../kitchenSink/KitchenSink'
import Tester from '../tester/Tester'
import LanguageSelector from '../global/LanguageSelector'
import ThemeSelector from '../global/ThemeSelector'

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
        <div className="container-fluid">
          <div className="float-right pt-2 pb-2">
            <ThemeSelector />
            <LanguageSelector />
          </div>
          <div className="clearfix" />
        </div>
        <Tester />
        {/* <KitchenSink /> */}
      </GlobalContainer>
    )
  }
}

export default App
