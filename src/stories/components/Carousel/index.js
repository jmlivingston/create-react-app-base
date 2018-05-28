import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/layout/App'
import config from 'stories/config'
	import { default as Carousel } from './Carousel'
	import { default as CarouselCustomTag } from './CarouselCustomTag'
	import { default as CarouselUncontrolled } from './CarouselUncontrolled'

storiesOf('Carousel', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Carousel />)
.add('CustomTag', () => <CarouselCustomTag />)
.add('Uncontrolled', () => <CarouselUncontrolled />)
