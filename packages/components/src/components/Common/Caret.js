import React from 'react'

const Caret = ({ isVertical = true, isToggled = false }) => {
    return <span className={`float-right caret-${isToggled ? isVertical ? 'up' : 'left' : isVertical ? 'down' : 'right'}`}></span>
}

export default Caret
