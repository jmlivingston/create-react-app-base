import PropTypes from 'prop-types'
import React from 'react'

import { GlobalContainer } from 'components/Global/GlobalContainer'
import ThemeSelector from 'components/Global/ThemeSelector'

const ComponentWrapper = props => {
  return (
    <GlobalContainer>
      <div className="float-right">
        <ThemeSelector />
      </div>
      <div className="clearfix" />
      {props.children}
    </GlobalContainer>
  )
}

ComponentWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ComponentWrapper
