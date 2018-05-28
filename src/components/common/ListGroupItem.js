import { ListGroupItem as ReactStrapListGroupItem } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const ListGroupItem = props => {
  return (
    <ThemeImporter>
      <ReactStrapListGroupItem {...props} />
    </ThemeImporter>
  )
}

ListGroupItem.propTypes = ReactStrapListGroupItem.propTypes

export default ListGroupItem
