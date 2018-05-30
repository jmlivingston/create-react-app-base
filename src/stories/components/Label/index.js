import { storiesOf } from '@storybook/react'
import React from 'react'

import config from 'stories/config'
import { default as LabelHidden } from './LabelHidden'

storiesOf('Label', module)
  .addDecorator(config.wrapper)
  .add('Hidden', () => <LabelHidden />)
