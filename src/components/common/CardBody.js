import { CardBody as ReactStrapCardBody } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardBody = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardbody">
        <ReactStrapCardBody {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardBody.propTypes = ReactStrapCardBody.propTypes

export default CardBody
