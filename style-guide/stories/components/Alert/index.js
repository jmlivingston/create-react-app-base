import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
import { default as Alert } from './Alert'
import { default as AlertContent } from './AlertContent'
import { default as AlertDismiss } from './AlertDismiss'
import { default as AlertLink } from './AlertLink'
import { default as AlertUncontrolledDismiss } from './AlertUncontrolledDismiss'

storiesOf('Alert', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Alert />)
  .add('Content', () => <AlertContent />)
  .add('Dismiss', () => <AlertDismiss />)
  .add('Link', () => <AlertLink />)
  .add('UncontrolledDismiss', () => <AlertUncontrolledDismiss />)
