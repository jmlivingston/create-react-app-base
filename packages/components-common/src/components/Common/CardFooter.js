import { CardFooter as ReactStrapCardFooter } from 'reactstrap'
import React from 'react'

const CardFooter = props => {
  return <ReactStrapCardFooter {...props} />
}

CardFooter.propTypes = ReactStrapCardFooter.propTypes

export default CardFooter
