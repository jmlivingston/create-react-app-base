import React from 'react'

import ColorDefault from './ColorDefault'

import ColorDefaultCode from '../../../code/components/Color/ColorDefaultCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Color = props => {
  return (
    <StyleGuideWrapper title="Color" {...props}>
      <StyleGuideComponent title="Color" name="ColorDefault" component={<ColorDefault />} code={ColorDefaultCode} />
    </StyleGuideWrapper>
  )
}

export default Color
