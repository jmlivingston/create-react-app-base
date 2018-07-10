import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const Home = ({ strings }) => {
  return (
    <Fragment>
      Test components here...
    </Fragment>
  )
}

Home.propTypes = {
  strings: PropTypes.object.isRequired
}

export default Home
