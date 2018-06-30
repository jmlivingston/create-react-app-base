import { BrowserRouter } from 'react-router-dom'
import React, { Fragment, PureComponent } from 'react'

import Header from './Header'
import { GlobalContainer, GlobalContainerContext, GlobalImporter, ThemeImporter } from '@myorg/components-common'
import Routes from './Routes'

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
                  <BrowserRouter>
                    <Fragment>
                      <Header strings={strings} user={context.user} context={context} />
                      <main role="main" className="main container-fluid">
                        <Routes strings={strings} />
                      </main>
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
