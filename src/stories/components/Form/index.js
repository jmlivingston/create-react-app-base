import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
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
