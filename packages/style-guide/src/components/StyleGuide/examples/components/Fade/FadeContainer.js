import React from 'react'

import FadeDefault from './FadeDefault'

import FadeDefaultCode from '../../../code/components/Fade/FadeDefaultCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Fade = props => {
  return (
    <StyleGuideWrapper title="Fade" {...props}>
      <StyleGuideComponent title="Fade" name="FadeDefault" component={<FadeDefault />} code={FadeDefaultCode} />
    </StyleGuideWrapper>
  )
}

export default Fade
