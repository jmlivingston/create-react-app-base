import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import APP from 'config/appConstants'

const Error = ({ friendlyError = APP.ERROR.GENERIC, error, info }) => {
  return (
    <Fragment>
      <div className="bs4-container-fluid bs4-text-center">
        <h1 className="bs4-display-1">Oops!</h1>
        <br />
        <h2>Error: {friendlyError}</h2>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <Fragment>
          {error && (
            <Fragment>
              <h2>Error</h2>
              <pre>
                <code>{JSON.stringify(error, null, 2)}</code>
              </pre>
              <hr />
            </Fragment>
          )}
          {info && (
            <Fragment>
              <h2>Info</h2>
              <pre>
                <code>{JSON.stringify(info, null, 2)}</code>
              </pre>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

Error.displayName = 'Error'
Error.propTypes = {
  error: PropTypes.object,
  friendlyError: PropTypes.string,
  info: PropTypes.object
}

export default Error
