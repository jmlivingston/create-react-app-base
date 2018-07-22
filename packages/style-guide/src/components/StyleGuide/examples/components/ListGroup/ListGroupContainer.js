import React, { Fragment } from 'react'

import ListGroupAnchorsAndButtons from './ListGroupAnchorsAndButtons'
import ListGroupBadge from './ListGroupBadge'
import ListGroupContextualClasses from './ListGroupContextualClasses'
import ListGroupCustomContent from './ListGroupCustomContent'
import ListGroupDefault from './ListGroupDefault'
import ListGroupDisabledItems from './ListGroupDisabledItems'

import ListGroupAnchorsAndButtonsCode from '../../../code/components/ListGroup/ListGroupAnchorsAndButtonsCode'
import ListGroupBadgeCode from '../../../code/components/ListGroup/ListGroupBadgeCode'
import ListGroupContextualClassesCode from '../../../code/components/ListGroup/ListGroupContextualClassesCode'
import ListGroupCustomContentCode from '../../../code/components/ListGroup/ListGroupCustomContentCode'
import ListGroupDefaultCode from '../../../code/components/ListGroup/ListGroupDefaultCode'
import ListGroupDisabledItemsCode from '../../../code/components/ListGroup/ListGroupDisabledItemsCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const ListGroup = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="ListGroup" name="ListGroupAnchorsAndButtons" component={<ListGroupAnchorsAndButtons />} code={ListGroupAnchorsAndButtonsCode} {...props} />
				<StyleGuideWrapper title="ListGroup" name="ListGroupBadge" component={<ListGroupBadge />} code={ListGroupBadgeCode} {...props} />
				<StyleGuideWrapper title="ListGroup" name="ListGroupContextualClasses" component={<ListGroupContextualClasses />} code={ListGroupContextualClassesCode} {...props} />
				<StyleGuideWrapper title="ListGroup" name="ListGroupCustomContent" component={<ListGroupCustomContent />} code={ListGroupCustomContentCode} {...props} />
				<StyleGuideWrapper title="ListGroup" name="ListGroupDefault" component={<ListGroupDefault />} code={ListGroupDefaultCode} {...props} />
				<StyleGuideWrapper title="ListGroup" name="ListGroupDisabledItems" component={<ListGroupDisabledItems />} code={ListGroupDisabledItemsCode} {...props} />
    </Fragment>
  )
}

export default ListGroup
    
