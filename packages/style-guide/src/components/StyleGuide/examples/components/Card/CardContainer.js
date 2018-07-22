import React, { Fragment } from 'react'

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
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Card = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Card" name="CardAlignment" component={<CardAlignment />} code={CardAlignmentCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardBackgrounds" component={<CardBackgrounds />} code={CardBackgroundsCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardColumnsDefault" component={<CardColumnsDefault />} code={CardColumnsDefaultCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardContentTypes" component={<CardContentTypes />} code={CardContentTypesCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardDecks" component={<CardDecks />} code={CardDecksCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardDefault" component={<CardDefault />} code={CardDefaultCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardGroups" component={<CardGroups />} code={CardGroupsCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardHeaderFooter" component={<CardHeaderFooter />} code={CardHeaderFooterCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardImageCaps" component={<CardImageCaps />} code={CardImageCapsCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardImageOverlay" component={<CardImageOverlay />} code={CardImageOverlayCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardOutline" component={<CardOutline />} code={CardOutlineCode} {...props} />
				<StyleGuideWrapper title="Card" name="CardSizing" component={<CardSizing />} code={CardSizingCode} {...props} />
    </Fragment>
  )
}

export default Card
    
