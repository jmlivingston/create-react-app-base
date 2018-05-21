import { PopperContent as ReactStrapPopperContent } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const PopperContent = props => {
  return (
    <Fragment>
      <ThemeImporter path="_poppercontent">
        <ReactStrapPopperContent {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

PopperContent.propTypes = ReactStrapPopperContent.propTypes

export default PopperContent
