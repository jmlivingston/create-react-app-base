import { InputGroup as ReactStrapInputGroup } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const InputGroup = props => {
  return (
    <Fragment>
      <ThemeImporter path="_forms">
        <ReactStrapInputGroup {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

InputGroup.propTypes = ReactStrapInputGroup.propTypes

export default InputGroup
