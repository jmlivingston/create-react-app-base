import { DropdownMenu as ReactStrapDropdownMenu } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const DropdownMenu = props => {
  return (
    <ThemeImporter>
      <ReactStrapDropdownMenu {...props}>{props.children}</ReactStrapDropdownMenu>
    </ThemeImporter>
  )
}

DropdownMenu.propTypes = ReactStrapDropdownMenu.propTypes

export default DropdownMenu
