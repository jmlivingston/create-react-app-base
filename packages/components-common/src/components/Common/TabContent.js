import { TabContent as ReactStrapTabContent } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const TabContent = props => {
  return (
    <ThemeImporter sassNames={['nav']}>
      <ReactStrapTabContent {...props} />
    </ThemeImporter>
  )
}

TabContent.propTypes = ReactStrapTabContent.propTypes

export default TabContent
