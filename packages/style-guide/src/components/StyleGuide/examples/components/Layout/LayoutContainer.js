import React from 'react'

import LayoutDefault from './LayoutDefault'

import LayoutDefaultCode from '../../../code/components/Layout/LayoutDefaultCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Layout = props => {
  return (
    <StyleGuideWrapper title="Layout" {...props}>
      <StyleGuideComponent title="Layout" name="LayoutDefault" component={<LayoutDefault />} code={LayoutDefaultCode} />
    </StyleGuideWrapper>
  )
}

export default Layout
