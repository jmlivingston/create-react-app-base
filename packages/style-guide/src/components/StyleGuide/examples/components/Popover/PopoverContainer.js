import React from 'react'

import PopoverDefault from './PopoverDefault'
import PopoverMulti from './PopoverMulti'

import PopoverDefaultCode from '../../../code/components/Popover/PopoverDefaultCode'
import PopoverMultiCode from '../../../code/components/Popover/PopoverMultiCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Popover = props => {
  return (
    <StyleGuideWrapper title="Popover" {...props}>
      <StyleGuideComponent
        title="Popover"
        name="PopoverDefault"
        component={<PopoverDefault />}
        code={PopoverDefaultCode}
      />
      <StyleGuideComponent title="Popover" name="PopoverMulti" component={<PopoverMulti />} code={PopoverMultiCode} />
    </StyleGuideWrapper>
  )
}

export default Popover
