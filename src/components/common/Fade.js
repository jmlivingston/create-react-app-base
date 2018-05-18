import { Fade as ReactStrapFade } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Fade = props => {
  return (
    <Fragment>
      <ThemeImporter path="_fade">
        <ReactStrapFade {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Fade.propTypes = ReactStrapFade.propTypes

export default Fade
