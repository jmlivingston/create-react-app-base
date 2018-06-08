const BadgeButtonCode = `import React from 'react'
import { Badge, Button } from 'components/Common'

export default class BadgeButton extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" outline>
          Notifications <Badge color="secondary">4</Badge>
        </Button>
      </div>
    )
  }
}
`

export default BadgeButtonCode
