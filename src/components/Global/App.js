import Loadable from 'react-loadable'
import React, { PureComponent, Fragment } from 'react'

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
          {context => {
            return (
              <GlobalImporter
                stringNames={['app', 'routes']}
                render={({ strings }) => {
                  return (
                    <ThemeImporter sassBase={true}>
                      <Header strings={strings} user={context.user} context={context} />
                      <main role="main" className="main container-fluid">
                        <Routes />
                      </main>
                      <Footer strings={strings} />
                      <ThemeImporter sassFooter={true}>
                        <Fragment />
                      </ThemeImporter>
                    </ThemeImporter>
                  )
                }}
              />
            )
          }}
        </GlobalContainerContext.Consumer>
      </GlobalContainer>
    )
  }
}

export default App
