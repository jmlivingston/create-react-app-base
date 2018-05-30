import { Fade as ReactStrapFade } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Fade = props => {
  return (
    <ThemeImporter>
      <ReactStrapFade {...props} />
    </ThemeImporter>
  )
}

Fade.propTypes = ReactStrapFade.propTypes

export default Fade