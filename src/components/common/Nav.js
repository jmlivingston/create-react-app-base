import { Nav as ReactStrapNav } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Nav = props => {
  return (
    <ThemeImporter sassNames={['_nav']}>
      <ReactStrapNav {...props} />
    </ThemeImporter>
  )
}

Nav.propTypes = ReactStrapNav.propTypes

export default Nav
