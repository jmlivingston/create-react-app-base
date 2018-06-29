import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Code from 'components/Common/Code'
import APP from 'config/appConstants'

const Error = ({ error = { friendlyError: APP.ERROR.GENERIC } }) => {
  return (
    <Fragment>
      <div className="container-fluid text-center">
        <h1 className="display-1">Oops!</h1>
        <br />
        <h2>{error.friendlyError}</h2>
      </div>
      {process.env.NODE_ENV === 'development' &&
        error && (
          <Fragment>
            <hr />
            <Code label="Error (Dev Mode Only)" code={JSON.stringify(error, null, 2)} />
          </Fragment>
        )}
    </Fragment>
  )
}

Error.displayName = 'Error'
Error.propTypes = {
  error: PropTypes.object
}

export default Error
