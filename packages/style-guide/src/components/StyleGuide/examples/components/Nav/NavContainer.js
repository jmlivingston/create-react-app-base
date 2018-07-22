import React, { Fragment } from 'react'

import NavDefault from './NavDefault'
import NavNavbarDefault from './NavNavbarDefault'
import NavNavbarTogglerDefault from './NavNavbarTogglerDefault'
import NavPills from './NavPills'
import NavTabs from './NavTabs'
import NavVertical from './NavVertical'

import NavDefaultCode from '../../../code/components/Nav/NavDefaultCode'
import NavNavbarDefaultCode from '../../../code/components/Nav/NavNavbarDefaultCode'
import NavNavbarTogglerDefaultCode from '../../../code/components/Nav/NavNavbarTogglerDefaultCode'
import NavPillsCode from '../../../code/components/Nav/NavPillsCode'
import NavTabsCode from '../../../code/components/Nav/NavTabsCode'
import NavVerticalCode from '../../../code/components/Nav/NavVerticalCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Nav = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Nav" name="NavDefault" component={<NavDefault />} code={NavDefaultCode} {...props} />
				<StyleGuideWrapper title="Nav" name="NavNavbarDefault" component={<NavNavbarDefault />} code={NavNavbarDefaultCode} {...props} />
				<StyleGuideWrapper title="Nav" name="NavNavbarTogglerDefault" component={<NavNavbarTogglerDefault />} code={NavNavbarTogglerDefaultCode} {...props} />
				<StyleGuideWrapper title="Nav" name="NavPills" component={<NavPills />} code={NavPillsCode} {...props} />
				<StyleGuideWrapper title="Nav" name="NavTabs" component={<NavTabs />} code={NavTabsCode} {...props} />
				<StyleGuideWrapper title="Nav" name="NavVertical" component={<NavVertical />} code={NavVerticalCode} {...props} />
    </Fragment>
  )
}

export default Nav
    
