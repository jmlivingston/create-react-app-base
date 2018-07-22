import React, { Fragment } from 'react'

import CollapseDefault from './CollapseDefault'
import CollapseEvents from './CollapseEvents'

import CollapseDefaultCode from '../../../code/components/Collapse/CollapseDefaultCode'
import CollapseEventsCode from '../../../code/components/Collapse/CollapseEventsCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Collapse = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Collapse" name="CollapseDefault" component={<CollapseDefault />} code={CollapseDefaultCode} {...props} />
				<StyleGuideWrapper title="Collapse" name="CollapseEvents" component={<CollapseEvents />} code={CollapseEventsCode} {...props} />
    </Fragment>
  )
}

export default Collapse
    
