import { Jumbotron as ReactStrapJumbotron } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Jumbotron = props => {
  return (
    <Fragment>
      <ThemeImporter path="_jumbotron">
        <ReactStrapJumbotron {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Jumbotron.propTypes = ReactStrapJumbotron.propTypes

export default Jumbotron
