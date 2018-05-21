import { ListGroupItemText as ReactStrapListGroupItemText } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ListGroupItemText = props => {
  return (
    <Fragment>
      <ThemeImporter path="_listgroupitemtext">
        <ReactStrapListGroupItemText {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ListGroupItemText.propTypes = ReactStrapListGroupItemText.propTypes

export default ListGroupItemText
