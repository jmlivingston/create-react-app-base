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

  styleList = {}

  setUser = async user => {
    const themeLanguageChanged = this.state.user.theme !== user.theme || this.state.user.language !== user.language
    await authHelper.user.set(user)
    this.setState({
      user
    })
    if (themeLanguageChanged) {
      window.location.reload() // NOTE: Required for theme reloading due to SASS limitations
    }
  }

  state = {
    user: authHelper.user.get(),
    auth: {
      updateUser: async properties => {
        this.setUser({ ...this.state.user, ...properties })
      },
      logIn: async emailPassword => {
        const user = await authHelper.user.logIn(emailPassword)
        if (user) {
          this.setUser(user)
        }
        return !!user
      },
      logOut: async () => {
        this.setUser(APP.DEFAULT_PROFILE)
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
      <GlobalContainerContext.Provider value={{ ...this.state }}>{this.props.children}</GlobalContainerContext.Provider>
    )
  }
}

export { GlobalContainer, GlobalContainerContext }
