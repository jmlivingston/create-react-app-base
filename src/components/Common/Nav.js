import { Nav as ReactStrapNav } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Nav = props => {
  return (
    <ThemeImporter sassNames={['nav']}>
      <ReactStrapNav {...props} />
    </ThemeImporter>
  )
}

Nav.propTypes = ReactStrapNav.propTypes

export default Nav
