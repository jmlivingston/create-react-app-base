import PropTypes from 'prop-types'
import React from 'react'

import { GlobalContainer } from '../components/Global/GlobalContainer'

const Wrapper = props => {
  return <GlobalContainer>{props.children}</GlobalContainer>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
