import { InputGroupAddon as ReactStrapInputGroupAddon } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const InputGroupAddon = props => {
  return (
    <ThemeImporter>
      <ReactStrapInputGroupAddon {...props} />
    </ThemeImporter>
  )
}

InputGroupAddon.propTypes = ReactStrapInputGroupAddon.propTypes

export default InputGroupAddon