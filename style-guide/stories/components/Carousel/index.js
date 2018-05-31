import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
import { default as Carousel } from './Carousel'
import { default as CarouselCustomTag } from './CarouselCustomTag'
import { default as CarouselUncontrolled } from './CarouselUncontrolled'

storiesOf('Carousel', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Carousel />)
  .add('CustomTag', () => <CarouselCustomTag />)
  .add('Uncontrolled', () => <CarouselUncontrolled />)
