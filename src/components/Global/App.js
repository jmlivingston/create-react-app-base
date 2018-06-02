import React, { Component } from 'react'

import { GlobalContainer, GlobalContainerContext } from 'components/Global/GlobalContainer'
import Footer from './Footer'
import GlobalImporter from 'components/Global/GlobalImporter'
import Header from './Header'
import Routes from './Routes'
import ThemeImporter from 'components/Global/ThemeImporter'

import './App.scss'

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
        <GlobalContainerContext.Consumer>
          {context => (
            <GlobalImporter
              stringNames={['app', 'routes']}
              render={({ strings }) => (
                <ThemeImporter>
                  <Header strings={strings} user={context.state.user} context={context} />
                  <main role="main" className="main container-fluid">
                    <Routes />
                  </main>
                  <Footer strings={strings} />
                </ThemeImporter>
              )}
            />
          )}
        </GlobalContainerContext.Consumer>
      </GlobalContainer>
    )
  }
}

export default App
