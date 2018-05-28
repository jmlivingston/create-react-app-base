import React, { Component } from 'react'

const GlobalContainerContext = React.createContext()

class GlobalContainer extends Component {
  static displayName = 'GlobalContainer'

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
      language: 'en',
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

  state = {
    theme: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')).theme
      : localStorage.getItem('theme') || 'original',
    language: localStorage.getItem('language') || 'en',
    defaultLanguage: 'en',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    updateTheme: theme => {
      if (this.state.theme !== theme) {
        localStorage.setItem('theme', theme)
        if (this.state.user) {
          const user = {
            ...this.state.user,
            theme: theme
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
        this.setState({
          language
        })
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
      // NOTE: Required for theme reloading due to SASS limitations
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
