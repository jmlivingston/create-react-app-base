import { Label as ReactStrapLabel } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Label = props => {
  return (
    <Fragment>
      <ThemeImporter path="_label">
        <ReactStrapLabel {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Label.propTypes = ReactStrapLabel.propTypes

export default Label
