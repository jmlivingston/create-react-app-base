import { CardText as ReactStrapCardText } from 'reactstrap'
import React from 'react'

const CardText = props => {
  return <ReactStrapCardText {...props} />
}

CardText.propTypes = ReactStrapCardText.propTypes

export default CardText
