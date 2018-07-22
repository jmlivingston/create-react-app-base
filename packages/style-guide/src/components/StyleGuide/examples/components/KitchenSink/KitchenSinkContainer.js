import React, { Fragment } from 'react'

import KitchenSinkDefault from './KitchenSinkDefault'

import KitchenSinkDefaultCode from '../../../code/components/KitchenSink/KitchenSinkDefaultCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const KitchenSink = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="KitchenSink" name="KitchenSinkDefault" component={<KitchenSinkDefault />} code={KitchenSinkDefaultCode} {...props} />
    </Fragment>
  )
}

export default KitchenSink
    
