import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as Jumbotron } from './Jumbotron'
	import { default as JumbotronFluid } from './JumbotronFluid'

storiesOf('Jumbotron', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Jumbotron />)
.add('Fluid', () => <JumbotronFluid />)
