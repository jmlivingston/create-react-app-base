import { default as ReactDatePicker } from 'react-datepicker'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

class DatePicker extends PureComponent {
  state = {
    isLoaded: false
  }

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }

  onChange = date => {
    this.props.onChange(date.toISOString())
  }

  bindData = async () => {
    // HACK: moment.js tends to be a memory hog
    // Note: dateHelper uses dayjs
    const moment = await import('moment')
    this.setState({
      moment,
      isLoaded: true
    })
  }

  componentDidMount() {
    this.bindData()
  }

  render() {
    return this.state.isLoaded ? (
      <ThemeImporter sassNames={['_date-picker']}>
        <ReactDatePicker onChange={this.onChange} selected={this.state.moment(this.props.value)} />
      </ThemeImporter>
    ) : null
  }
}

export default DatePicker
