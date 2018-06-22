import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import React from 'react'

import GlobalImporter from './GlobalImporter'
import { Loader } from 'components/Common'

const loadableConfig = {
  delay: 200,
  timeout: 10000
}

const Routes = ({ strings }) => (
  <Switch>
    <Route
      exact
      path={strings.routes.home.path}
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader {...props} message={`${strings.loading} ${strings.routes.home.displayName}...`} />,
        loader: () => import('components/Home/Home'),
        render(loaded, props) {
          const Home = loaded.default
          return <GlobalImporter stringNames={['home']} render={({ strings }) => <Home strings={strings} />} />
        }
      })}
    />
    <Route
      exact
      path={strings.routes.about.path}
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader {...props} message={`${strings.loading} ${strings.routes.home.displayName}...`} />,
        loader: () => import('components/About/About'),
        render(loaded, props) {
          const About = loaded.default
          return <GlobalImporter stringNames={['about']} render={({ strings }) => <About strings={strings} />} />
        }
      })}
    />
    <Route
      exact
      path={strings.routes.languageTester.path}
      component={Loadable({
        ...loadableConfig,
        loading: props => (
          <Loader {...props} message={`${strings.loading} ${strings.routes.languageTester.displayName}...`} />
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
        ...loadableConfig,
        loading: props => <Loader {...props} message={`${strings.loading} ${strings.routes.siteMap.displayName}...`} />,
        loader: () => import('components/Global/SiteMap'),
        render(loaded, props) {
          const SiteMap = loaded.default
          return <SiteMap strings={strings.routes} />
        }
      })}
    />
    <Route
      path={strings.routes.todo.path}
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader {...props} message={`${strings.loading} ${strings.routes.todo.displayName}...`} />,
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
        ...loadableConfig,
        loading: props => (
          <Loader {...props} message={`${strings.loading} ${strings.routes.userSettings.displayName}...`} />
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
      path={`${strings.routes.styleGuide.path}`}
      component={Loadable({
        ...loadableConfig,
        loading: props => (
          <Loader {...props} message={`${strings.loading} ${strings.routes.styleGuide.displayName}...`} />
        ),
        loader: () => import('styleGuide/StyleGuideApp'),
        render(loaded, props) {
          const StyleGuideApp = loaded.default
          return <StyleGuideApp {...props} />
        }
      })}
    />
    <Route
      exact
      path={`${strings.routes.styleGuide.path}/:id`}
      component={Loadable({
        ...loadableConfig,
        loading: props => (
          <Loader {...props} message={`${strings.loading} ${strings.routes.styleGuide.displayName}...`} />
        ),
        loader: () => import('styleGuide/StyleGuideApp'),
        render(loaded, props) {
          const StyleGuideApp = loaded.default
          return <StyleGuideApp {...props} />
        }
      })}
    />
    <Redirect to="/" />
  </Switch>
)

Routes.propTypes = {
  strings: PropTypes.object.isRequired
}

export default Routes
