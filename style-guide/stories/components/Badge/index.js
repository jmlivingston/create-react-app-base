import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Badge } from './Badge'
import { default as BadgeButton } from './BadgeButton'
import { default as BadgeLinks } from './BadgeLinks'
import { default as BadgePills } from './BadgePills'
import { default as BadgeVariations } from './BadgeVariations'

storiesOf('Badge', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Badge />))
  .add('Button', withInfo(config.defaults.info)(() => <BadgeButton />))
  .add('Links', withInfo(config.defaults.info)(() => <BadgeLinks />))
  .add('Pills', withInfo(config.defaults.info)(() => <BadgePills />))
  .add('Variations', withInfo(config.defaults.info)(() => <BadgeVariations />))
