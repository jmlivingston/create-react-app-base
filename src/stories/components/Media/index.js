import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/layout/App'
import config from 'stories/config'
	import { default as Media } from './Media'
	import { default as MediaAlignment } from './MediaAlignment'
	import { default as MediaList } from './MediaList'
	import { default as MediaNested } from './MediaNested'

storiesOf('Media', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Media />)
.add('Alignment', () => <MediaAlignment />)
.add('List', () => <MediaList />)
.add('Nested', () => <MediaNested />)
