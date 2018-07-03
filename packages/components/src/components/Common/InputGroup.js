import { InputGroup as ReactStrapInputGroup } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const InputGroup = props => {
  return (
    <ThemeImporter sassNames={['input-group']}>
      <ReactStrapInputGroup {...props} />
    </ThemeImporter>
  )
}

InputGroup.propTypes = ReactStrapInputGroup.propTypes

export default InputGroup
