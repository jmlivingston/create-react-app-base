import { TabPane as ReactStrapTabPane } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const TabPane = props => {
  return (
    <Fragment>
      <ThemeImporter path="_tabpane">
        <ReactStrapTabPane {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

TabPane.propTypes = ReactStrapTabPane.propTypes

export default TabPane
