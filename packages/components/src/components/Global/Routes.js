import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import React from 'react'

import GlobalImporter from './GlobalImporter'
import { Loader } from '../Common'

const loadableConfig = {
  delay: 200,
  timeout: 10000
}

const Routes = ({ strings }) =>
  strings ? (
    <Switch>
      <Route
        exact
        path={strings.routes.home.path}
        component={Loadable({
          ...loadableConfig,
          loading: props => <Loader {...props} message={`${strings.loading} ${strings.routes.home.displayName}...`} />,
          loader: () => import('../Home/Home'),
          render(loaded) {
            const Home = loaded.default
            return (
              <GlobalImporter
                appName="components"
                stringNames={['home']}
                render={({ strings }) => <Home strings={strings} />}
              />
            )
          }
        })}
      />
      <Route
        exact
        path={strings.routes.languageTester.path}
        component={Loadable({
          ...loadableConfig,
          loading: props => <Loader {...props} message={`${strings.loading} ${strings.routes.home.displayName}...`} />,
          loader: () => import('../LocalizationTester/LocalizationTester'),
          render(loaded) {
            const LocalizationTester = loaded.default
            return (
              <GlobalImporter
                appName="components"
                stringNames={['localizationTester']}
                render={({ strings }) => <LocalizationTester strings={strings} />}
              />
            )
          }
        })}
      />
      <Redirect to="/" />
    </Switch>
  ) : null

Routes.propTypes = {
  strings: PropTypes.object
}

export default Routes
