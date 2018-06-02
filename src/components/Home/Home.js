import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import LocalizationTester from 'components/LocalizationTester/LocalizationTester'

const Home = ({ strings }) => {
  return (
    <Fragment>
      <h1>{strings.title}</h1>
      <p>{strings.description}</p>
      <LocalizationTester />
    </Fragment>
  )
}

Home.propTypes = {
  strings: PropTypes.object.isRequired
}

export default Home
