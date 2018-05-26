import React, { Component } from 'react'

import { ThemeContainer } from './components/theme/ThemeContainer'
import KitchenSink from './KitchenSink'
// import Tester from './Tester'
import ThemeSelector from './components/theme/ThemeSelector'

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
      <ThemeContainer>
        <div className="container-fluid">
          <div className="float-right pt-2 pb-2">
            <ThemeSelector />
          </div>
          <div className="clearfix" />
        </div>
        {/* <Tester /> */}
        <KitchenSink />
      </ThemeContainer>
    )
  }
}

export default App
