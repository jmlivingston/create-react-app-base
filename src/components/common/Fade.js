import { Fade as ReactStrapFade } from 'reactstrap'

import React from 'react'

const Fade = props => {
  return <ReactStrapFade {...props} />
}

Fade.propTypes = ReactStrapFade.propTypes

export default Fade
