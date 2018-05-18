import { CardTitle as ReactStrapCardTitle } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardTitle = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardtitle">
        <ReactStrapCardTitle {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardTitle.propTypes = ReactStrapCardTitle.propTypes

export default CardTitle
