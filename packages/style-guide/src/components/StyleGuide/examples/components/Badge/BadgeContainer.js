import React from 'react'

import BadgeButton from './BadgeButton'
import BadgeDefault from './BadgeDefault'
import BadgeLinks from './BadgeLinks'
import BadgePills from './BadgePills'
import BadgeVariations from './BadgeVariations'

import BadgeButtonCode from '../../../code/components/Badge/BadgeButtonCode'
import BadgeDefaultCode from '../../../code/components/Badge/BadgeDefaultCode'
import BadgeLinksCode from '../../../code/components/Badge/BadgeLinksCode'
import BadgePillsCode from '../../../code/components/Badge/BadgePillsCode'
import BadgeVariationsCode from '../../../code/components/Badge/BadgeVariationsCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Badge = props => {
  return (
    <StyleGuideWrapper title="Badge" {...props}>
      <StyleGuideComponent title="Badge" name="BadgeButton" component={<BadgeButton />} code={BadgeButtonCode} />
      <StyleGuideComponent title="Badge" name="BadgeDefault" component={<BadgeDefault />} code={BadgeDefaultCode} />
      <StyleGuideComponent title="Badge" name="BadgeLinks" component={<BadgeLinks />} code={BadgeLinksCode} />
      <StyleGuideComponent title="Badge" name="BadgePills" component={<BadgePills />} code={BadgePillsCode} />
      <StyleGuideComponent
        title="Badge"
        name="BadgeVariations"
        component={<BadgeVariations />}
        code={BadgeVariationsCode}
      />
    </StyleGuideWrapper>
  )
}

export default Badge
