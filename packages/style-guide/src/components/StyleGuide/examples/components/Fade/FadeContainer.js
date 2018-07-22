import React, { Fragment } from 'react'

import FadeDefault from './FadeDefault'

import FadeDefaultCode from '../../../code/components/Fade/FadeDefaultCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Fade = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Fade" name="FadeDefault" component={<FadeDefault />} code={FadeDefaultCode} {...props} />
    </Fragment>
  )
}

export default Fade
    
