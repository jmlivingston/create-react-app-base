import React from 'react'

import DatePickerDefault from './DatePickerDefault'

import DatePickerDefaultCode from '../../../code/components/DatePicker/DatePickerDefaultCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const DatePicker = props => {
  return (
    <StyleGuideWrapper title="DatePicker" {...props}>
      <StyleGuideComponent
        title="DatePicker"
        name="DatePickerDefault"
        component={<DatePickerDefault />}
        code={DatePickerDefaultCode}
      />
    </StyleGuideWrapper>
  )
}

export default DatePicker
