import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const About = ({ strings = { title: '', description: '' } }) => {
  return (
    <Fragment>
      <h1>{strings.title}</h1>
      <p>{strings.description}</p>
    </Fragment>
  )
}

About.propTypes = {
  strings: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
}

export default About
