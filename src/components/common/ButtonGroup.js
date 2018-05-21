import { ButtonGroup as ReactStrapButtonGroup } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ButtonGroup = props => {
  return (
    <Fragment>
      <ThemeImporter path="_buttongroup">
        <ReactStrapButtonGroup {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ButtonGroup.propTypes = ReactStrapButtonGroup.propTypes

export default ButtonGroup
