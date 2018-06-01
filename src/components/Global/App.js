import React, { Component } from 'react'

import { GlobalContainer, GlobalContainerContext } from 'components/Global/GlobalContainer'
import Footer from './Footer'
import GlobalImporter from 'components/Global/GlobalImporter'
import Header from './Header'
import LocalizationTester from 'components/LocalizationTester/LocalizationTester'
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
              stringName="app"
              render={({ strings, user }) => (
                <ThemeImporter>
                  <Header strings={strings} user={user} context={context} />
                  <main role="main" className="main container-fluid">
                    <LocalizationTester />
                    <h1>Hello</h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                      ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                      ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                      quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
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
