import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Tooltip } from './Tooltip'
import { default as TooltipAutoHide } from './TooltipAutoHide'
import { default as TooltipMulti } from './TooltipMulti'
import { default as TooltipUncontrolled } from './TooltipUncontrolled'

storiesOf('Tooltip', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Tooltip />))
  .add('AutoHide', withInfo(config.defaults.info)(() => <TooltipAutoHide />))
  .add('Multi', withInfo(config.defaults.info)(() => <TooltipMulti />))
  .add('Uncontrolled', withInfo(config.defaults.info)(() => <TooltipUncontrolled />))
