import { BrowserRouter } from 'react-router-dom'
import React, { Fragment, PureComponent } from 'react'

import Header from './Header'
import { GlobalContainer, ThemeImporter } from '@myorg/components'
import Routes from './Routes'

class App extends PureComponent {
  render() {
    return (
      <GlobalContainer>
        <ThemeImporter sassBase={true}>
          <BrowserRouter>
            <Fragment>
              <Header />
              <main role="main" className="main container-fluid">
                <Routes />
              </main>
            </Fragment>
          </BrowserRouter>
        </ThemeImporter>
      </GlobalContainer>
    )
  }
}

export default App
