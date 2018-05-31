import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Media } from './Media'
import { default as MediaAlignment } from './MediaAlignment'
import { default as MediaList } from './MediaList'
import { default as MediaNested } from './MediaNested'

storiesOf('Media', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Media />))
  .add('Alignment', withInfo(config.defaults.info)(() => <MediaAlignment />))
  .add('List', withInfo(config.defaults.info)(() => <MediaList />))
  .add('Nested', withInfo(config.defaults.info)(() => <MediaNested />))
