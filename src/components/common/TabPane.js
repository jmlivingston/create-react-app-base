import { TabPane as ReactStrapTabPane } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const TabPane = props => {
  return (
    <ThemeImporter>
      <ReactStrapTabPane {...props} />
    </ThemeImporter>
  )
}

TabPane.propTypes = ReactStrapTabPane.propTypes

export default TabPane
