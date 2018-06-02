import React, { Fragment } from 'react'

import GlobalImporter from 'components/Global/GlobalImporter'

const About = () => {
  return (
    <GlobalImporter
      stringNames={['about']}
      render={({ strings, user }) => (
        <Fragment>
          <h1>{strings.title}</h1>
          <p>{strings.description}</p>
        </Fragment>
      )}
    />
  )
}

export default About
