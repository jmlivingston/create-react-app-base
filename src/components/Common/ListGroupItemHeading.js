import { ListGroupItemHeading as ReactStrapListGroupItemHeading } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const ListGroupItemHeading = props => {
  return (
    <ThemeImporter>
      <ReactStrapListGroupItemHeading {...props} />
    </ThemeImporter>
  )
}

ListGroupItemHeading.propTypes = ReactStrapListGroupItemHeading.propTypes

export default ListGroupItemHeading
