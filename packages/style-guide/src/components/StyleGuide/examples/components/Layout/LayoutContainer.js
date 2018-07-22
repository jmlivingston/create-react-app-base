import React, { Fragment } from 'react'

import LayoutDefault from './LayoutDefault'

import LayoutDefaultCode from '../../../code/components/Layout/LayoutDefaultCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Layout = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Layout" name="LayoutDefault" component={<LayoutDefault />} code={LayoutDefaultCode} {...props} />
    </Fragment>
  )
}

export default Layout
    
