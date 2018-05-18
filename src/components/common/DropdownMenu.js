import { DropdownMenu as ReactStrapDropdownMenu } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const DropdownMenu = props => {
  return (
    <Fragment>
      <ThemeImporter path="_dropdownmenu">
        <ReactStrapDropdownMenu {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

DropdownMenu.propTypes = ReactStrapDropdownMenu.propTypes

export default DropdownMenu
