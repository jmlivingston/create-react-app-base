import React from 'react'

import CardAlignment from './CardAlignment'
import CardBackgrounds from './CardBackgrounds'
import CardColumnsDefault from './CardColumnsDefault'
import CardContentTypes from './CardContentTypes'
import CardDecks from './CardDecks'
import CardDefault from './CardDefault'
import CardGroups from './CardGroups'
import CardHeaderFooter from './CardHeaderFooter'
import CardImageCaps from './CardImageCaps'
import CardImageOverlay from './CardImageOverlay'
import CardOutline from './CardOutline'
import CardSizing from './CardSizing'

import CardAlignmentCode from '../../../code/components/Card/CardAlignmentCode'
import CardBackgroundsCode from '../../../code/components/Card/CardBackgroundsCode'
import CardColumnsDefaultCode from '../../../code/components/Card/CardColumnsDefaultCode'
import CardContentTypesCode from '../../../code/components/Card/CardContentTypesCode'
import CardDecksCode from '../../../code/components/Card/CardDecksCode'
import CardDefaultCode from '../../../code/components/Card/CardDefaultCode'
import CardGroupsCode from '../../../code/components/Card/CardGroupsCode'
import CardHeaderFooterCode from '../../../code/components/Card/CardHeaderFooterCode'
import CardImageCapsCode from '../../../code/components/Card/CardImageCapsCode'
import CardImageOverlayCode from '../../../code/components/Card/CardImageOverlayCode'
import CardOutlineCode from '../../../code/components/Card/CardOutlineCode'
import CardSizingCode from '../../../code/components/Card/CardSizingCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Card = props => {
  return (
    <StyleGuideWrapper title="Card" {...props}>
      <StyleGuideComponent title="Card" name="CardAlignment" component={<CardAlignment />} code={CardAlignmentCode} />
      <StyleGuideComponent
        title="Card"
        name="CardBackgrounds"
        component={<CardBackgrounds />}
        code={CardBackgroundsCode}
      />
      <StyleGuideComponent
        title="Card"
        name="CardColumnsDefault"
        component={<CardColumnsDefault />}
        code={CardColumnsDefaultCode}
      />
      <StyleGuideComponent
        title="Card"
        name="CardContentTypes"
        component={<CardContentTypes />}
        code={CardContentTypesCode}
      />
      <StyleGuideComponent title="Card" name="CardDecks" component={<CardDecks />} code={CardDecksCode} />
      <StyleGuideComponent title="Card" name="CardDefault" component={<CardDefault />} code={CardDefaultCode} />
      <StyleGuideComponent title="Card" name="CardGroups" component={<CardGroups />} code={CardGroupsCode} />
      <StyleGuideComponent
        title="Card"
        name="CardHeaderFooter"
        component={<CardHeaderFooter />}
        code={CardHeaderFooterCode}
      />
      <StyleGuideComponent title="Card" name="CardImageCaps" component={<CardImageCaps />} code={CardImageCapsCode} />
      <StyleGuideComponent
        title="Card"
        name="CardImageOverlay"
        component={<CardImageOverlay />}
        code={CardImageOverlayCode}
      />
      <StyleGuideComponent title="Card" name="CardOutline" component={<CardOutline />} code={CardOutlineCode} />
      <StyleGuideComponent title="Card" name="CardSizing" component={<CardSizing />} code={CardSizingCode} />
    </StyleGuideWrapper>
  )
}

export default Card
