import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const About = ({ strings }) => {
  return (
    <Fragment>
      <h1>{strings.title}</h1>
      <p>{strings.description}</p>
    </Fragment>
  )
}

About.propTypes = {
  strings: PropTypes.object.isRequired
}

export default About
