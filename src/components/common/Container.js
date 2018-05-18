import { Container as ReactStrapContainer } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Container = props => {
  return (
    <Fragment>
      <ThemeImporter path="_container">
        <ReactStrapContainer {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Container.propTypes = ReactStrapContainer.propTypes

export default Container
