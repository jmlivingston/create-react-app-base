import React, { Fragment } from 'react'

import ColorDefault from './ColorDefault'

import ColorDefaultCode from '../../../code/components/Color/ColorDefaultCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Color = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Color" name="ColorDefault" component={<ColorDefault />} code={ColorDefaultCode} {...props} />
    </Fragment>
  )
}

export default Color
    
