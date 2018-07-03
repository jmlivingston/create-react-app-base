import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { APP, auth } from '@myorg/core'
import GlobalContainerContext from './GlobalContainerContext'

class GlobalContainer extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  styleList = {}

  setUser = async (user, isLogInOut = false) => {
    const themeLanguageChanged = this.state.user.theme !== user.theme || this.state.user.language !== user.language
    const response = await auth.user.set(user, isLogInOut)
    this.setState({
      user
    })
    if (themeLanguageChanged) {
      window.location.reload() // NOTE: Required for theme reloading due to SASS limitations
    }
    return response
  }

  state = {
    user: auth.user.get(),
    auth: {
      updateUser: async properties => {
        const response = await this.setUser({ ...this.state.user, ...properties }, true)
        return response
      },
      logIn: async emailPassword => {
        const user = await auth.user.logIn(emailPassword)
        if (user) {
          await this.setUser(user, true)
        }
        return !!user
      },
      logOut: async () => {
        await this.setUser(APP.DEFAULT_PROFILE, true)
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

export default GlobalContainer
