import React, { Fragment } from 'react'

import PopoverDefault from './PopoverDefault'
import PopoverMulti from './PopoverMulti'

import PopoverDefaultCode from '../../../code/components/Popover/PopoverDefaultCode'
import PopoverMultiCode from '../../../code/components/Popover/PopoverMultiCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Popover = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Popover" name="PopoverDefault" component={<PopoverDefault />} code={PopoverDefaultCode} {...props} />
				<StyleGuideWrapper title="Popover" name="PopoverMulti" component={<PopoverMulti />} code={PopoverMultiCode} {...props} />
    </Fragment>
  )
}

export default Popover
    
