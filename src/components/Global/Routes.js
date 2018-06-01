import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import React from 'react'

import About from 'components/About/About'
import Home from 'components/Home/Home'
import TodoContainer from 'components/Todo/TodoContainer'
import UserSettings from 'components/Auth/UserSettings'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/todo" exact component={TodoContainer} />
        <Route path="/user-settings" exact component={UserSettings} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
