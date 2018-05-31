import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Progress } from './Progress'
import { default as ProgressAnimated } from './ProgressAnimated'
import { default as ProgressColor } from './ProgressColor'
import { default as ProgressLabels } from './ProgressLabels'
import { default as ProgressMax } from './ProgressMax'
import { default as ProgressMulti } from './ProgressMulti'
import { default as ProgressStriped } from './ProgressStriped'

storiesOf('Progress', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Progress />))
  .add('Animated', withInfo(config.defaults.info)(() => <ProgressAnimated />))
  .add('Color', withInfo(config.defaults.info)(() => <ProgressColor />))
  .add('Labels', withInfo(config.defaults.info)(() => <ProgressLabels />))
  .add('Max', withInfo(config.defaults.info)(() => <ProgressMax />))
  .add('Multi', withInfo(config.defaults.info)(() => <ProgressMulti />))
  .add('Striped', withInfo(config.defaults.info)(() => <ProgressStriped />))
