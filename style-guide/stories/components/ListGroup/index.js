import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as ListGroup } from './ListGroup'
import { default as ListGroupAnchorsAndButtons } from './ListGroupAnchorsAndButtons'
import { default as ListGroupBadge } from './ListGroupBadge'
import { default as ListGroupContextualClasses } from './ListGroupContextualClasses'
import { default as ListGroupCustomContent } from './ListGroupCustomContent'
import { default as ListGroupDisabledItems } from './ListGroupDisabledItems'

storiesOf('ListGroup', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <ListGroup />))
  .add('AnchorsAndButtons', withInfo(config.defaults.info)(() => <ListGroupAnchorsAndButtons />))
  .add('Badge', withInfo(config.defaults.info)(() => <ListGroupBadge />))
  .add('ContextualClasses', withInfo(config.defaults.info)(() => <ListGroupContextualClasses />))
  .add('CustomContent', withInfo(config.defaults.info)(() => <ListGroupCustomContent />))
  .add('DisabledItems', withInfo(config.defaults.info)(() => <ListGroupDisabledItems />))
