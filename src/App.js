import React, { Component } from 'react'

import { GlobalContainer } from './components/global/GlobalContainer'
import KitchenSink from './KitchenSink'
// import Tester from './Tester'
import ThemeSelector from './components/global/ThemeSelector'

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
          </div>
          <div className="clearfix" />
        </div>
        {/* <Tester /> */}
        <KitchenSink />
      </GlobalContainer>
    )
  }
}

export default App
