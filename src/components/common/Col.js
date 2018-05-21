import { Col as ReactStrapCol } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Col = props => {
  return (
    <Fragment>
      <ThemeImporter path="_col">
        <ReactStrapCol {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Col.propTypes = ReactStrapCol.propTypes

export default Col
