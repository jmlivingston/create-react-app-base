import { Media as ReactStrapMedia } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Media = props => {
  return (
    <Fragment>
      <ThemeImporter path="_media">
        <ReactStrapMedia {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Media.propTypes = ReactStrapMedia.propTypes

export default Media
