import { Collapse as ReactStrapCollapse } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Collapse = props => {
  return (
    <Fragment>
      <ThemeImporter path="_collapse">
        <ReactStrapCollapse {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Collapse.propTypes = ReactStrapCollapse.propTypes

export default Collapse
