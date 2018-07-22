import React from 'react'

import TooltipAutoHide from './TooltipAutoHide'
import TooltipDefault from './TooltipDefault'
import TooltipMulti from './TooltipMulti'
import TooltipUncontrolled from './TooltipUncontrolled'

import TooltipAutoHideCode from '../../../code/components/Tooltip/TooltipAutoHideCode'
import TooltipDefaultCode from '../../../code/components/Tooltip/TooltipDefaultCode'
import TooltipMultiCode from '../../../code/components/Tooltip/TooltipMultiCode'
import TooltipUncontrolledCode from '../../../code/components/Tooltip/TooltipUncontrolledCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Tooltip = props => {
  return (
    <StyleGuideWrapper title="Tooltip" {...props}>
      <StyleGuideComponent
        title="Tooltip"
        name="TooltipAutoHide"
        component={<TooltipAutoHide />}
        code={TooltipAutoHideCode}
      />
      <StyleGuideComponent
        title="Tooltip"
        name="TooltipDefault"
        component={<TooltipDefault />}
        code={TooltipDefaultCode}
      />
      <StyleGuideComponent title="Tooltip" name="TooltipMulti" component={<TooltipMulti />} code={TooltipMultiCode} />
      <StyleGuideComponent
        title="Tooltip"
        name="TooltipUncontrolled"
        component={<TooltipUncontrolled />}
        code={TooltipUncontrolledCode}
      />
    </StyleGuideWrapper>
  )
}

export default Tooltip
