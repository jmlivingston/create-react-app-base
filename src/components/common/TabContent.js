import { TabContent as ReactStrapTabContent } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const TabContent = props => {
  return (
    <Fragment>
      <ThemeImporter path="_tabcontent">
        <ReactStrapTabContent {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

TabContent.propTypes = ReactStrapTabContent.propTypes

export default TabContent
