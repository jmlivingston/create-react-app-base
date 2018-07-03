import { Collapse as ReactStrapCollapse } from 'reactstrap'
import React from 'react'

const Collapse = props => {
  return <ReactStrapCollapse {...props} />
}

Collapse.propTypes = ReactStrapCollapse.propTypes

export default Collapse
