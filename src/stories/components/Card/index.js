import { storiesOf } from '@storybook/react'
import React from 'react'

import config from 'stories/config'
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
  .add('Default', () => <Card />)
  .add('Alignment', () => <CardAlignment />)
  .add('Backgrounds', () => <CardBackgrounds />)
  .add('Columns', () => <CardColumns />)
  .add('ContentTypes', () => <CardContentTypes />)
  .add('Decks', () => <CardDecks />)
  .add('Groups', () => <CardGroups />)
  .add('HeaderFooter', () => <CardHeaderFooter />)
  .add('ImageCaps', () => <CardImageCaps />)
  .add('ImageOverlay', () => <CardImageOverlay />)
  .add('Outline', () => <CardOutline />)
  .add('Sizing', () => <CardSizing />)
