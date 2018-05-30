import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Debugger = ({ props, state }) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="bs4-container-fluid">
        <hr />
        <h2 className="bs4-mb-2">Debugger</h2>
        {props && (
          <Fragment>
            <h3>Props</h3>
            <pre>
              <code>{JSON.stringify(props, null, 2)}</code>
            </pre>
          </Fragment>
        )}
        {state && (
          <Fragment>
            <h3>State</h3>
            <pre>
              <code>{JSON.stringify(state, null, 2)}</code>
            </pre>
          </Fragment>
        )}
      </div>
    )
  } else {
    return null
  }
}

Debugger.displayName = 'Debugger'
Debugger.propTypes = {
  props: PropTypes.object,
  state: PropTypes.object
}

export default Debugger
