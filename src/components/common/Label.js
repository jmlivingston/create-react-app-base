import { Label as ReactStrapLabel } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const Label = props => {
  return (
    <ThemeImporter>
      <ReactStrapLabel {...props} />
    </ThemeImporter>
  )
}

Label.propTypes = ReactStrapLabel.propTypes

export default Label
