import { Media as ReactStrapMedia } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const Media = props => {
  return (
    <ThemeImporter sassNames={['_media']}>
      <ReactStrapMedia {...props} />
    </ThemeImporter>
  )
}

Media.propTypes = ReactStrapMedia.propTypes

export default Media
