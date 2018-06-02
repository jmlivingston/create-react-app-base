import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import React from 'react'

import GlobalImporter from './GlobalImporter'
import { Loader } from 'components/Common'

const Routes = () => {
  return (
    <GlobalImporter
      stringNames={['routes']}
      render={({ strings, user }) => {
        return Object.keys(strings).length > 0 ? (
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path={strings.routes.home.path}
                component={Loadable({
                  loading: () => <Loader strings={`${strings.loading} ${strings.routes.home}...`} />,
                  loader: () => import('components/Home/Home'),
                  render(loaded, props) {
                    const Home = loaded.default
                    return <Home />
                  }
                })}
              />
              <Route
                exact
                path={strings.routes.about.path}
                component={Loadable({
                  loading: () => <Loader strings={`${strings.loading} ${strings.routes.home}...`} />,
                  loader: () => import('components/About/About'),
                  render(loaded, props) {
                    const About = loaded.default
                    return <About />
                  }
                })}
              />
              <Route
                exact
                path={strings.routes.siteMap.path}
                component={Loadable({
                  loading: () => <Loader strings={`${strings.loading} ${strings.routes.siteMap}...`} />,
                  loader: () => import('components/Global/SiteMap'),
                  render(loaded, props) {
                    const SiteMap = loaded.default
                    return <SiteMap strings={strings.routes} />
                  }
                })}
              />
              <Route
                exact
                path={strings.routes.todo.path}
                component={Loadable({
                  loading: () => <Loader strings={`${strings.loading} ${strings.routes.todo}...`} />,
                  loader: () => import('components/Todo/TodoContainer'),
                  render(loaded, props) {
                    const TodoContainer = loaded.default
                    return <TodoContainer />
                  }
                })}
              />
              <Route
                exact
                path={strings.routes.userSettings.path}
                component={Loadable({
                  loading: () => <Loader strings={`${strings.loading} ${strings.routes.userSettings}...`} />,
                  loader: () => import('components/Auth/UserSettings'),
                  render(loaded, props) {
                    const UserSettings = loaded.default
                    return <UserSettings />
                  }
                })}
              />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        ) : null
      }}
    />
  )
}

export default Routes
