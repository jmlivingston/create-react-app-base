import React, { Fragment } from 'react'

import { UncontrolledTooltip } from 'components/Common'

export default function TooltipUncontrolled() {
  return (
    <Fragment>
      <p>
        Somewhere in here is a{' '}
        <a href="/" id="UncontrolledTooltipTooltipUncontrolled">
          tooltip
        </a>.
      </p>
      <UncontrolledTooltip placement="right" target="UncontrolledTooltipTooltipUncontrolled">
        Hello world!
      </UncontrolledTooltip>
    </Fragment>
  )
}
