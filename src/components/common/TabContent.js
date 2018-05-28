import { TabContent as ReactStrapTabContent } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const TabContent = props => {
  return (
    <ThemeImporter sassNames={['_nav']}>
      <ReactStrapTabContent {...props} />
    </ThemeImporter>
  )
}

TabContent.propTypes = ReactStrapTabContent.propTypes

export default TabContent
