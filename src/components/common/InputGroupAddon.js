import { InputGroupAddon as ReactStrapInputGroupAddon } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const InputGroupAddon = props => {
  return (
    <Fragment>
      <ThemeImporter path="_inputgroupaddon">
        <ReactStrapInputGroupAddon {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

InputGroupAddon.propTypes = ReactStrapInputGroupAddon.propTypes

export default InputGroupAddon
