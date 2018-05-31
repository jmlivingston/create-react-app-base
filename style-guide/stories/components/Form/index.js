import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Form } from './Form'
import { default as FormFeedback } from './FormFeedback'
import { default as FormGrid } from './FormGrid'
import { default as FormInline } from './FormInline'

storiesOf('Form', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Form />))
  .add('Feedback', withInfo(config.defaults.info)(() => <FormFeedback />))
  .add('Grid', withInfo(config.defaults.info)(() => <FormGrid />))
  .add('Inline', withInfo(config.defaults.info)(() => <FormInline />))
