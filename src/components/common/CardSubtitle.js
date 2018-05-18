import { CardSubtitle as ReactStrapCardSubtitle } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardSubtitle = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardsubtitle">
        <ReactStrapCardSubtitle {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardSubtitle.propTypes = ReactStrapCardSubtitle.propTypes

export default CardSubtitle
