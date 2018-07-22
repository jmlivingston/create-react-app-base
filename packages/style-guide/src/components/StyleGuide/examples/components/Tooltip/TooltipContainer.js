import React, { Fragment } from 'react'

import TooltipAutoHide from './TooltipAutoHide'
import TooltipDefault from './TooltipDefault'
import TooltipMulti from './TooltipMulti'
import TooltipUncontrolled from './TooltipUncontrolled'

import TooltipAutoHideCode from '../../../code/components/Tooltip/TooltipAutoHideCode'
import TooltipDefaultCode from '../../../code/components/Tooltip/TooltipDefaultCode'
import TooltipMultiCode from '../../../code/components/Tooltip/TooltipMultiCode'
import TooltipUncontrolledCode from '../../../code/components/Tooltip/TooltipUncontrolledCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Tooltip = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Tooltip" name="TooltipAutoHide" component={<TooltipAutoHide />} code={TooltipAutoHideCode} {...props} />
				<StyleGuideWrapper title="Tooltip" name="TooltipDefault" component={<TooltipDefault />} code={TooltipDefaultCode} {...props} />
				<StyleGuideWrapper title="Tooltip" name="TooltipMulti" component={<TooltipMulti />} code={TooltipMultiCode} {...props} />
				<StyleGuideWrapper title="Tooltip" name="TooltipUncontrolled" component={<TooltipUncontrolled />} code={TooltipUncontrolledCode} {...props} />
    </Fragment>
  )
}

export default Tooltip
    
