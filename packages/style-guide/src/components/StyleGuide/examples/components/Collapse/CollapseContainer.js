import React from 'react'

import CollapseDefault from './CollapseDefault'
import CollapseEvents from './CollapseEvents'

import CollapseDefaultCode from '../../../code/components/Collapse/CollapseDefaultCode'
import CollapseEventsCode from '../../../code/components/Collapse/CollapseEventsCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Collapse = props => {
  return (
    <StyleGuideWrapper title="Collapse" {...props}>
      <StyleGuideComponent
        title="Collapse"
        name="CollapseDefault"
        component={<CollapseDefault />}
        code={CollapseDefaultCode}
      />
      <StyleGuideComponent
        title="Collapse"
        name="CollapseEvents"
        component={<CollapseEvents />}
        code={CollapseEventsCode}
      />
    </StyleGuideWrapper>
  )
}

export default Collapse
