const TooltipUncontrolledCode = `/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react'
import { UncontrolledTooltip } from 'components/Common'

export default function TooltipUncontrolled() {
  return (
    <div>
      <p>
        Somewhere in here is a{' '}
        <a href="/" id="UncontrolledTooltipTooltipUncontrolled">
          tooltip
        </a>.
      </p>
      <UncontrolledTooltip placement="right" target="UncontrolledTooltipTooltipUncontrolled">
        Hello world!
      </UncontrolledTooltip>
    </div>
  )
}
`

export default TooltipUncontrolledCode