const DatePickerDefaultCode = `import React, { PureComponent } from 'react'

import { DatePicker } from '@myorg/components'

class DatePickerDefault extends PureComponent {
  state = {
    date: new Date().toISOString()
  }

  dateChange = date => {
    this.setState({ date })
  }

  render() {
    return <DatePicker value={this.state.date} onChange={this.dateChange} />
  }
}

export default DatePickerDefault
`

export default DatePickerDefaultCode
