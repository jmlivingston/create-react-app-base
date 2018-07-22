import React, { Fragment } from 'react'

import DatePickerDefault from './DatePickerDefault'

import DatePickerDefaultCode from '../../../code/components/DatePicker/DatePickerDefaultCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const DatePicker = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="DatePicker" name="DatePickerDefault" component={<DatePickerDefault />} code={DatePickerDefaultCode} {...props} />
    </Fragment>
  )
}

export default DatePicker
    
