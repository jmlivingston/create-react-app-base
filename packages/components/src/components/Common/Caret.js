import PropTypes from 'prop-types'
import React from 'react'

const Caret = ({ isVertical = true, isToggled = false }) => {
    return <span className={`float-right caret-${isToggled ? isVertical ? 'up' : 'left' : isVertical ? 'down' : 'right'}`}></span>
}

Caret.propTypes = {
  isToggled: PropTypes.bool,
  isVertical: PropTypes.bool
}

export default Caret
