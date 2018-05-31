import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Alert } from './Alert'
import { default as AlertContent } from './AlertContent'
import { default as AlertDismiss } from './AlertDismiss'
import { default as AlertLink } from './AlertLink'
import { default as AlertUncontrolledDismiss } from './AlertUncontrolledDismiss'

storiesOf('Alert', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Alert />))
  .add('Content', withInfo(config.defaults.info)(() => <AlertContent />))
  .add('Dismiss', withInfo(config.defaults.info)(() => <AlertDismiss />))
  .add('Link', withInfo(config.defaults.info)(() => <AlertLink />))
  .add('UncontrolledDismiss', withInfo(config.defaults.info)(() => <AlertUncontrolledDismiss />))
