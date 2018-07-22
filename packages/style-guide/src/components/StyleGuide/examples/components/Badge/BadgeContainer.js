import React, { Fragment } from 'react'

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
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Badge = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Badge" name="BadgeButton" component={<BadgeButton />} code={BadgeButtonCode} {...props} />
				<StyleGuideWrapper title="Badge" name="BadgeDefault" component={<BadgeDefault />} code={BadgeDefaultCode} {...props} />
				<StyleGuideWrapper title="Badge" name="BadgeLinks" component={<BadgeLinks />} code={BadgeLinksCode} {...props} />
				<StyleGuideWrapper title="Badge" name="BadgePills" component={<BadgePills />} code={BadgePillsCode} {...props} />
				<StyleGuideWrapper title="Badge" name="BadgeVariations" component={<BadgeVariations />} code={BadgeVariationsCode} {...props} />
    </Fragment>
  )
}

export default Badge
    
