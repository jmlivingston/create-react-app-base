import React, { Fragment } from 'react'

import TabsDefault from './TabsDefault'

import TabsDefaultCode from '../../../code/components/Tabs/TabsDefaultCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Tabs = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Tabs" name="TabsDefault" component={<TabsDefault />} code={TabsDefaultCode} {...props} />
    </Fragment>
  )
}

export default Tabs
    
