import React from 'react'

import KitchenSinkDefault from './KitchenSinkDefault'

import KitchenSinkDefaultCode from '../../../code/components/KitchenSink/KitchenSinkDefaultCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const KitchenSink = props => {
  return (
    <StyleGuideWrapper title="KitchenSink" {...props}>
      <StyleGuideComponent
        title="KitchenSink"
        name="KitchenSinkDefault"
        component={<KitchenSinkDefault />}
        code={KitchenSinkDefaultCode}
      />
    </StyleGuideWrapper>
  )
}

export default KitchenSink
