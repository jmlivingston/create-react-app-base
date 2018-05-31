import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Carousel } from './Carousel'
import { default as CarouselCustomTag } from './CarouselCustomTag'
import { default as CarouselUncontrolled } from './CarouselUncontrolled'

storiesOf('Carousel', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Carousel />))
  .add('CustomTag', withInfo(config.defaults.info)(() => <CarouselCustomTag />))
  .add('Uncontrolled', withInfo(config.defaults.info)(() => <CarouselUncontrolled />))
