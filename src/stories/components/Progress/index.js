import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as Progress } from './Progress'
	import { default as ProgressAnimated } from './ProgressAnimated'
	import { default as ProgressColor } from './ProgressColor'
	import { default as ProgressLabels } from './ProgressLabels'
	import { default as ProgressMax } from './ProgressMax'
	import { default as ProgressMulti } from './ProgressMulti'
	import { default as ProgressStriped } from './ProgressStriped'

storiesOf('Progress', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Progress />)
.add('Animated', () => <ProgressAnimated />)
.add('Color', () => <ProgressColor />)
.add('Labels', () => <ProgressLabels />)
.add('Max', () => <ProgressMax />)
.add('Multi', () => <ProgressMulti />)
.add('Striped', () => <ProgressStriped />)
