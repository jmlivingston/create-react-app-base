import { TabPane as ReactStrapTabPane } from 'reactstrap'
import React from 'react'

const TabPane = props => {
  return <ReactStrapTabPane {...props} />
}

TabPane.propTypes = ReactStrapTabPane.propTypes

export default TabPane
