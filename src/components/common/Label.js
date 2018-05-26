import { Label as ReactStrapLabel } from 'reactstrap'

import React from 'react'

const Label = props => {
  return <ReactStrapLabel {...props} />
}

Label.propTypes = ReactStrapLabel.propTypes

export default Label
