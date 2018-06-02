import React, { Fragment } from 'react'

import GlobalImporter from 'components/Global/GlobalImporter'
import LocalizationTester from 'components/LocalizationTester/LocalizationTester'

const Home = () => {
  return (
    <GlobalImporter
      stringNames={['home']}
      render={({ strings, user }) => (
        <Fragment>
          <h1>{strings.title}</h1>
          <p>{strings.description}</p>
          <LocalizationTester />
        </Fragment>
      )}
    />
  )
}

export default Home
