import { Media as ReactStrapMedia } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

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
