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
                  loading: () => <Loader message={`${strings.loading} ${strings.routes.home.displayName}...`} />,
                  loader: () => import('components/Home/Home'),
                  render(loaded, props) {
                    const Home = loaded.default
                    return (
                      <GlobalImporter stringNames={['home']} render={({ strings }) => <Home strings={strings} />} />
                    )
                  }
                })}
              />
              <Route
                exact
                path={strings.routes.about.path}
                component={Loadable({
                  loading: () => <Loader message={`${strings.loading} ${strings.routes.home.displayName}...`} />,
                  loader: () => import('components/About/About'),
                  render(loaded, props) {
                    const About = loaded.default
                    return (
                      <GlobalImporter stringNames={['about']} render={({ strings }) => <About strings={strings} />} />
                    )
                  }
                })}
              />
              <Route
                exact
                path={strings.routes.languageTester.path}
                component={Loadable({
                  loading: () => (
                    <Loader message={`${strings.loading} ${strings.routes.languageTester.displayName}...`} />
                  ),
                  loader: () => import('components/LocalizationTester/LocalizationTester'),
                  render(loaded, props) {
                    const LocalizationTester = loaded.default
                    return <LocalizationTester strings={strings} />
                  }
                })}
              />
              <Route
                exact
                path={strings.routes.siteMap.path}
                component={Loadable({
                  loading: () => <Loader message={`${strings.loading} ${strings.routes.siteMap.displayName}...`} />,
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
                  loading: () => <Loader message={`${strings.loading} ${strings.routes.todo.displayName}...`} />,
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
                  loading: () => (
                    <Loader message={`${strings.loading} ${strings.routes.userSettings.displayName}...`} />
                  ),
                  loader: () => import('components/Auth/UserSettings'),
                  render(loaded, props) {
                    const UserSettings = loaded.default
                    return <UserSettings />
                  }
                })}
              />
              <Route
                exact
                path={strings.routes.styleGuide.path}
                component={Loadable({
                  loading: () => <Loader message={`${strings.loading} ${strings.routes.styleGuide.displayName}...`} />,
                  loader: () => import('../../style-guide/StyleGuideApp'),
                  render(loaded, props) {
                    const StyleGuideApp = loaded.default
                    return <StyleGuideApp />
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
