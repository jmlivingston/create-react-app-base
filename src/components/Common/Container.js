import { Container as ReactStrapContainer } from 'reactstrap'
import React from 'react'

const Container = props => {
  return <ReactStrapContainer {...props} />
}

Container.propTypes = ReactStrapContainer.propTypes

export default Container
