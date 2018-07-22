import React from 'react'

import TabsDefault from './TabsDefault'

import TabsDefaultCode from '../../../code/components/Tabs/TabsDefaultCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Tabs = props => {
  return (
    <StyleGuideWrapper title="Tabs" {...props}>
      <StyleGuideComponent title="Tabs" name="TabsDefault" component={<TabsDefault />} code={TabsDefaultCode} />
    </StyleGuideWrapper>
  )
}

export default Tabs
