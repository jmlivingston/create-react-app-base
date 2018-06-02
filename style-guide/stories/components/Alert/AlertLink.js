import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Alert } from 'components/Common'
import config from '../../config'

storiesOf('Alert', module)
  .addDecorator(config.wrapper)
  .add(
    'AlertLink',
    withInfo(config.defaults.info)(() => (
      <div>
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
      </div>
    ))
  )
