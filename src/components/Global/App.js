import Loadable from 'react-loadable'
import React, { Component } from 'react'

import { GlobalContainer, GlobalContainerContext } from 'components/Global/GlobalContainer'
import GlobalImporter from 'components/Global/GlobalImporter'
import Routes from './Routes'
import ThemeImporter from 'components/Global/ThemeImporter'

import './App.scss'

const Footer = Loadable({
  loader: () => import('./Footer'),
  loading: () => null
})

const Header = Loadable({
  loader: () => import('./Header'),
  loading: () => null
})

class App extends Component {
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
