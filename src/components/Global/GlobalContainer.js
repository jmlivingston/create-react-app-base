import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

const GlobalContainerContext = React.createContext()

class GlobalContainer extends PureComponent {
  static displayName = 'GlobalContainer'

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  defaultLanguage = 'en'

  defaultTheme = 'original'

  defaultUser = {
    isAuthenticated: false,
    theme: this.defaultTheme,
    language: this.defaultLanguage
  }

  users = {
    'admin@x.com': {
      password: 'x',
      theme: 'darkly',
      language: 'en',
      firstName: 'Joe',
      lastName: 'Admin',
      isAuthenticated: false
    },
    'editor@x.com': {
      password: 'x',
      theme: 'original',
      language: 'ja',
      firstName: 'Joe',
      lastName: 'Editor',
      isAuthenticated: false
    },
    'view@x.com': {
      password: 'x',
      theme: 'yeti',
      language: 'en',
      firstName: 'Joe',
      lastName: 'View',
      isAuthenticated: false
    },
    'custom@x.com': {
      password: 'x',
      theme: 'custom',
      language: 'ja',
      firstName: '明',
      lastName: '黒沢',
      isAuthenticated: false
    }
  }

  state = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : this.defaultUser,
    defaultTheme: this.defaultTheme,
    defaultLanguage: this.defaultLanguage,
    updateUser: user => {
      if (this.state.user) {
        const updatedUser = {
          ...this.state.user,
          ...user
        }
        this.setState(prevState => ({
          updatedUser
        }))
        localStorage.setItem('user', JSON.stringify(updatedUser))
      }
      // NOTE: Required for theme reloading due to SASS limitations
      window.location.reload()
    },
    updateUserByPropertyValue: (property, value) => {
      this.state.updateUser({ ...this.state.user, [property]: value })
    },
    login: async user => {
      let userIsValid = false
      const filteredUser = this.users[user.email]
      if (filteredUser) {
        if (filteredUser.password === user.password) {
          userIsValid = true
        }
      }
      if (userIsValid) {
        const { password, ...user } = filteredUser
        this.setState({
          userIsValid,
          user
        })
        localStorage.setItem('user', JSON.stringify(user))
        // NOTE: Required for theme reloading due to SASS limitations and GlobalImporter
        window.location.reload()
      } else {
        this.setState({
          userIsValid
        })
      }
      return userIsValid
    },
    logOut: () => {
      const { firstName, lastName, ...user } = { ...this.state.user, isAuthenticated: false }
      localStorage.setItem('user', JSON.stringify(user))
      // NOTE: Required for theme reloading due to SASS limitations and GlobalImporter
      window.location.reload()
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
