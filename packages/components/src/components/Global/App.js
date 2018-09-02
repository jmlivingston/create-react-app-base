import { BrowserRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import React, { Fragment, PureComponent } from 'react'

import GlobalContainer from './GlobalContainer'
import GlobalContainerContext from './GlobalContainerContext'
import GlobalImporter from './GlobalImporter'
import Routes from './Routes'
import ThemeImporter from '../Global/ThemeImporter'

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
              appName="components"
              stringNames={['app', 'routes']}
              render={({ strings }) => (
                <ThemeImporter sassBase={true}>
                  <BrowserRouter>
                    <Fragment>
                      <Header strings={strings} user={context.user} context={context} />
                        <main role="main" className="main container-fluid">
                          <Routes strings={strings} />
                        </main>
                      <Footer strings={strings} user={context.user} />
                    </Fragment>
                  </BrowserRouter>
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
