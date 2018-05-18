import { CardLink as ReactStrapCardLink } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardLink = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardlink">
        <ReactStrapCardLink {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardLink.propTypes = ReactStrapCardLink.propTypes

export default CardLink
