import React from 'react'

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

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Nav = props => {
  return (
    <StyleGuideWrapper title="Nav" {...props}>
      <StyleGuideComponent title="Nav" name="NavDefault" component={<NavDefault />} code={NavDefaultCode} />
      <StyleGuideComponent
        title="Nav"
        name="NavNavbarDefault"
        component={<NavNavbarDefault />}
        code={NavNavbarDefaultCode}
      />
      <StyleGuideComponent
        title="Nav"
        name="NavNavbarTogglerDefault"
        component={<NavNavbarTogglerDefault />}
        code={NavNavbarTogglerDefaultCode}
      />
      <StyleGuideComponent title="Nav" name="NavPills" component={<NavPills />} code={NavPillsCode} />
      <StyleGuideComponent title="Nav" name="NavTabs" component={<NavTabs />} code={NavTabsCode} />
      <StyleGuideComponent title="Nav" name="NavVertical" component={<NavVertical />} code={NavVerticalCode} />
    </StyleGuideWrapper>
  )
}

export default Nav
