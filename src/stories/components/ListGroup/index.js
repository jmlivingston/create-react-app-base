import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/Global/App'
import config from 'stories/config'
	import { default as ListGroup } from './ListGroup'
	import { default as ListGroupAnchorsAndButtons } from './ListGroupAnchorsAndButtons'
	import { default as ListGroupBadge } from './ListGroupBadge'
	import { default as ListGroupContextualClasses } from './ListGroupContextualClasses'
	import { default as ListGroupCustomContent } from './ListGroupCustomContent'
	import { default as ListGroupDisabledItems } from './ListGroupDisabledItems'

storiesOf('ListGroup', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <ListGroup />)
.add('AnchorsAndButtons', () => <ListGroupAnchorsAndButtons />)
.add('Badge', () => <ListGroupBadge />)
.add('ContextualClasses', () => <ListGroupContextualClasses />)
.add('CustomContent', () => <ListGroupCustomContent />)
.add('DisabledItems', () => <ListGroupDisabledItems />)
