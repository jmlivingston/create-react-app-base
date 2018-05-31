import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
import { default as Form } from './Form'
import { default as FormFeedback } from './FormFeedback'
import { default as FormGrid } from './FormGrid'
import { default as FormInline } from './FormInline'

storiesOf('Form', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Form />)
  .add('Feedback', () => <FormFeedback />)
  .add('Grid', () => <FormGrid />)
  .add('Inline', () => <FormInline />)
