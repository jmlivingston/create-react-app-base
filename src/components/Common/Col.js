import { Col as ReactStrapCol } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Col = props => {
  return (
    <ThemeImporter>
      <ReactStrapCol {...props} />
    </ThemeImporter>
  )
}

Col.propTypes = ReactStrapCol.propTypes

export default Col