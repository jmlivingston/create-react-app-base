import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import APP from 'config/appConstants'
import authHelper from 'helpers/authHelper'

const GlobalContainerContext = React.createContext()

class GlobalContainer extends PureComponent {
  static displayName = 'GlobalContainer'

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  user = null
  styleList = {}

  state = {
    user: {
      get: () => {
        if (this.user === null) {
          this.user = authHelper.user.get()
        }
        return this.user
      },
      set: async user => {
        this.setState(async prevState => {
          const themeLanguageChanged =
            prevState.user.get().theme !== user.theme || prevState.user.get().language !== user.language
          await authHelper.user.set(user)
          if (themeLanguageChanged) {
            window.location.reload() // NOTE: Required for theme reloading due to SASS limitations
          }
          return {
            user
          }
        })
      },
      updateProperties: async properties => {
        this.state.user.set({ ...this.state.user.get(), ...properties })
      },
      logIn: async emailPassword => {
        const user = await authHelper.user.logIn(emailPassword)
        if (user) {
          this.state.user.set(user)
        }
        return !!user
      },
      logOut: async () => {
        this.state.user.set(APP.DEFAULT_PROFILE)
      }
    },
    styleList: {
      get: () => {
        return this.styleList
      },
      set: style => {
        this.styleList[style] = true
      }
    }
  }

  render() {
    return (
      <GlobalContainerContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </GlobalContainerContext.Provider>
    )
  }
}

export { GlobalContainer, GlobalContainerContext }
