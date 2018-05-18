import { Nav as ReactStrapNav } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Nav = props => {
  return (
    <Fragment>
      <ThemeImporter path="_nav">
        <ReactStrapNav {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Nav.propTypes = ReactStrapNav.propTypes

export default Nav
