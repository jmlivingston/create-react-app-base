import { ListGroupItemText as ReactStrapListGroupItemText } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const ListGroupItemText = props => {
  return (
    <ThemeImporter>
      <ReactStrapListGroupItemText {...props} />
    </ThemeImporter>
  )
}

ListGroupItemText.propTypes = ReactStrapListGroupItemText.propTypes

export default ListGroupItemText
