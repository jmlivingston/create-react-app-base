import React, { Fragment } from 'react'

import ProgressAnimated from './ProgressAnimated'
import ProgressColor from './ProgressColor'
import ProgressDefault from './ProgressDefault'
import ProgressLabels from './ProgressLabels'
import ProgressMax from './ProgressMax'
import ProgressMulti from './ProgressMulti'
import ProgressStriped from './ProgressStriped'

import ProgressAnimatedCode from '../../../code/components/Progress/ProgressAnimatedCode'
import ProgressColorCode from '../../../code/components/Progress/ProgressColorCode'
import ProgressDefaultCode from '../../../code/components/Progress/ProgressDefaultCode'
import ProgressLabelsCode from '../../../code/components/Progress/ProgressLabelsCode'
import ProgressMaxCode from '../../../code/components/Progress/ProgressMaxCode'
import ProgressMultiCode from '../../../code/components/Progress/ProgressMultiCode'
import ProgressStripedCode from '../../../code/components/Progress/ProgressStripedCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Progress = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Progress" name="ProgressAnimated" component={<ProgressAnimated />} code={ProgressAnimatedCode} {...props} />
				<StyleGuideWrapper title="Progress" name="ProgressColor" component={<ProgressColor />} code={ProgressColorCode} {...props} />
				<StyleGuideWrapper title="Progress" name="ProgressDefault" component={<ProgressDefault />} code={ProgressDefaultCode} {...props} />
				<StyleGuideWrapper title="Progress" name="ProgressLabels" component={<ProgressLabels />} code={ProgressLabelsCode} {...props} />
				<StyleGuideWrapper title="Progress" name="ProgressMax" component={<ProgressMax />} code={ProgressMaxCode} {...props} />
				<StyleGuideWrapper title="Progress" name="ProgressMulti" component={<ProgressMulti />} code={ProgressMultiCode} {...props} />
				<StyleGuideWrapper title="Progress" name="ProgressStriped" component={<ProgressStriped />} code={ProgressStripedCode} {...props} />
    </Fragment>
  )
}

export default Progress
    
