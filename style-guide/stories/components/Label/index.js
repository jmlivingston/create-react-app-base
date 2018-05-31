import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as LabelHidden } from './LabelHidden'

storiesOf('Label', module)
  .addDecorator(config.wrapper)
  .add('Hidden', withInfo(config.defaults.info)(() => <LabelHidden />))
