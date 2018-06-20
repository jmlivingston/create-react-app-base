import Loadable from 'react-loadable'
import React, { PureComponent } from 'react'

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

class App extends PureComponent {
  render() {
    return (
      <GlobalContainer>
        <GlobalContainerContext.Consumer>
          {context => (
            <GlobalImporter
              stringNames={['app', 'routes']}
              render={({ strings }) => (
                <ThemeImporter sassBase={true}>
                  <Header strings={strings} user={context.user} context={context} />
                  <main role="main" className="main container-fluid">
                    <Routes strings={strings} />
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
