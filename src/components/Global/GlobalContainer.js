import PropTypes from 'prop-types'
import React, { Component } from 'react'

const GlobalContainerContext = React.createContext()

class GlobalContainer extends Component {
  static displayName = 'GlobalContainer'

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  users = {
    'admin@x.com': {
      password: 'x',
      theme: 'darkly',
      language: 'en',
      firstName: 'Joe',
      lastName: 'Admin'
    },
    'editor@x.com': {
      password: 'x',
      theme: 'original',
      language: 'ja',
      firstName: 'Joe',
      lastName: 'Editor'
    },
    'view@x.com': {
      password: 'x',
      theme: 'yeti',
      language: 'en',
      firstName: 'Joe',
      lastName: 'View'
    }
  }

  getUserOrDefault(property, defaultValue) {
    return localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))[property]
      : localStorage.getItem(property) || defaultValue
  }

  state = {
    theme: this.getUserOrDefault('theme', 'original'),
    language: this.getUserOrDefault('language', 'en'),
    defaultLanguage: 'en',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    updateTheme: theme => {
      if (this.state.theme !== theme) {
        localStorage.setItem('theme', theme)
        if (this.state.user) {
          const user = {
            ...this.state.user,
            theme
          }
          this.setState(prevState => ({
            user
          }))
          localStorage.setItem('user', JSON.stringify(user))
        }
        // NOTE: Required for theme reloading due to SASS limitations
        window.location.reload()
      }
    },
    updateLanguage: language => {
      if (this.state.language !== language) {
        localStorage.setItem('language', language)
        if (this.state.user) {
          const user = {
            ...this.state.user,
            language
          }
          this.setState(prevState => ({
            language,
            user
          }))
          localStorage.setItem('user', JSON.stringify(user))
        }
        // NOTE: Required for theme reloading due to SASS limitations
        window.location.reload()
      }
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
      this.setState({
        user: undefined
      })
      localStorage.removeItem('user')
      // NOTE: Required for theme reloading due to SASS limitations and GlobalImporter
      window.location.reload()
    }
  }

  componentDidMount() {
    localStorage.setItem('theme', this.state.theme)
    localStorage.setItem('language', this.state.language)
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
