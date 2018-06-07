import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import API from 'config/apiConstants'
import APP from 'config/appConstants'
import dataHelper from 'helpers/dataHelper'

const GlobalContainerContext = React.createContext()

class GlobalContainer extends PureComponent {
  static displayName = 'GlobalContainer'

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  getUser = () =>
    localStorage.getItem(APP.LOCAL_STORAGE_KEYS.AUTH)
      ? JSON.parse(localStorage.getItem(APP.LOCAL_STORAGE_KEYS.AUTH))
      : APP.DEFAULT_PROFILE

  setUser = user => {
    this.setState(prevState => {
      localStorage.setItem(APP.LOCAL_STORAGE_KEYS.AUTH, JSON.stringify(user))
      if (prevState.user.theme !== user.theme) {
        // NOTE: Required for theme reloading due to SASS limitations
        window.location.reload()
      }
      return {
        user
      }
    })
  }

  state = {
    user: this.getUser(),
    updateUser: user => {
      if (this.state.user) {
        this.setUser({
          ...this.state.user,
          ...user
        })
      }
    },
    updateUserByPropertyValue: (property, value) => {
      this.state.updateUser({ ...this.state.user, [property]: value })
    },
    login: async user => {
      const loginResponse = await dataHelper.post(API.LOGIN.BASE, user)
      if (loginResponse.status.ok) {
        const userResponse = await dataHelper.get(`${API.USER.BASE}/${loginResponse.data.user.id}`)
        this.setUser({
          ...loginResponse.data.user,
          ...userResponse.data
        })
      }
      return loginResponse.status.ok
    },
    logOut: () => {
      this.setUser(APP.DEFAULT_PROFILE)
    }
  }

  render() {
    return (
      <GlobalContainerContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </GlobalContainerContext.Provider>
    )
  }
}

export { GlobalContainer, GlobalContainerContext }
