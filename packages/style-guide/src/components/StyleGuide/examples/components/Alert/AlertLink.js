import React, { Fragment } from 'react'

import { Alert } from '@myorg/components'

const AlertLink = () => {
  return (
    <Fragment>
      <Alert color="primary">
        This is a primary alert with{' '}
        <a href="/" className="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert color="secondary">
        This is a secondary alert with{' '}
        <a href="/" className="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert color="success">
        This is a success alert with{' '}
        <a href="/" className="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert color="danger">
        This is a danger alert with{' '}
        <a href="/" className="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert color="warning">
        This is a warning alert with{' '}
        <a href="/" className="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert color="info">
        This is a info alert with{' '}
        <a href="/" className="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert color="light">
        This is a light alert with{' '}
        <a href="/" className="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert color="dark">
        This is a dark alert with{' '}
        <a href="/" className="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
    </Fragment>
  )
}

export default AlertLink
