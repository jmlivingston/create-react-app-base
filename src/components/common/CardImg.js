import { CardImg as ReactStrapCardImg } from 'reactstrap'

import React from 'react'

const CardImg = props => {
  return <ReactStrapCardImg {...props} />
}

CardImg.propTypes = ReactStrapCardImg.propTypes

export default CardImg
