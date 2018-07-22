import React from 'react'

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

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Progress = props => {
  return (
    <StyleGuideWrapper title="Progress" {...props}>
      <StyleGuideComponent
        title="Progress"
        name="ProgressAnimated"
        component={<ProgressAnimated />}
        code={ProgressAnimatedCode}
      />
      <StyleGuideComponent
        title="Progress"
        name="ProgressColor"
        component={<ProgressColor />}
        code={ProgressColorCode}
      />
      <StyleGuideComponent
        title="Progress"
        name="ProgressDefault"
        component={<ProgressDefault />}
        code={ProgressDefaultCode}
      />
      <StyleGuideComponent
        title="Progress"
        name="ProgressLabels"
        component={<ProgressLabels />}
        code={ProgressLabelsCode}
      />
      <StyleGuideComponent title="Progress" name="ProgressMax" component={<ProgressMax />} code={ProgressMaxCode} />
      <StyleGuideComponent
        title="Progress"
        name="ProgressMulti"
        component={<ProgressMulti />}
        code={ProgressMultiCode}
      />
      <StyleGuideComponent
        title="Progress"
        name="ProgressStriped"
        component={<ProgressStriped />}
        code={ProgressStripedCode}
      />
    </StyleGuideWrapper>
  )
}

export default Progress
