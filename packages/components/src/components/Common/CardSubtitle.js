import { CardSubtitle as ReactStrapCardSubtitle } from 'reactstrap'
import React from 'react'

const CardSubtitle = props => {
  return <ReactStrapCardSubtitle {...props} />
}

CardSubtitle.propTypes = ReactStrapCardSubtitle.propTypes

export default CardSubtitle
