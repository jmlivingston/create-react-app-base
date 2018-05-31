import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Card } from './Card'
import { default as CardAlignment } from './CardAlignment'
import { default as CardBackgrounds } from './CardBackgrounds'
import { default as CardColumns } from './CardColumns'
import { default as CardContentTypes } from './CardContentTypes'
import { default as CardDecks } from './CardDecks'
import { default as CardGroups } from './CardGroups'
import { default as CardHeaderFooter } from './CardHeaderFooter'
import { default as CardImageCaps } from './CardImageCaps'
import { default as CardImageOverlay } from './CardImageOverlay'
import { default as CardOutline } from './CardOutline'
import { default as CardSizing } from './CardSizing'

storiesOf('Card', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Card />))
  .add('Alignment', withInfo(config.defaults.info)(() => <CardAlignment />))
  .add('Backgrounds', withInfo(config.defaults.info)(() => <CardBackgrounds />))
  .add('Columns', withInfo(config.defaults.info)(() => <CardColumns />))
  .add('ContentTypes', withInfo(config.defaults.info)(() => <CardContentTypes />))
  .add('Decks', withInfo(config.defaults.info)(() => <CardDecks />))
  .add('Groups', withInfo(config.defaults.info)(() => <CardGroups />))
  .add('HeaderFooter', withInfo(config.defaults.info)(() => <CardHeaderFooter />))
  .add('ImageCaps', withInfo(config.defaults.info)(() => <CardImageCaps />))
  .add('ImageOverlay', withInfo(config.defaults.info)(() => <CardImageOverlay />))
  .add('Outline', withInfo(config.defaults.info)(() => <CardOutline />))
  .add('Sizing', withInfo(config.defaults.info)(() => <CardSizing />))
