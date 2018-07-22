import React from 'react'

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

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const ListGroup = props => {
  return (
    <StyleGuideWrapper title="ListGroup" {...props}>
      <StyleGuideComponent
        title="ListGroup"
        name="ListGroupAnchorsAndButtons"
        component={<ListGroupAnchorsAndButtons />}
        code={ListGroupAnchorsAndButtonsCode}
      />
      <StyleGuideComponent
        title="ListGroup"
        name="ListGroupBadge"
        component={<ListGroupBadge />}
        code={ListGroupBadgeCode}
      />
      <StyleGuideComponent
        title="ListGroup"
        name="ListGroupContextualClasses"
        component={<ListGroupContextualClasses />}
        code={ListGroupContextualClassesCode}
      />
      <StyleGuideComponent
        title="ListGroup"
        name="ListGroupCustomContent"
        component={<ListGroupCustomContent />}
        code={ListGroupCustomContentCode}
      />
      <StyleGuideComponent
        title="ListGroup"
        name="ListGroupDefault"
        component={<ListGroupDefault />}
        code={ListGroupDefaultCode}
      />
      <StyleGuideComponent
        title="ListGroup"
        name="ListGroupDisabledItems"
        component={<ListGroupDisabledItems />}
        code={ListGroupDisabledItemsCode}
      />
    </StyleGuideWrapper>
  )
}

export default ListGroup
