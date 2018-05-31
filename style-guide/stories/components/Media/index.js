import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
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
