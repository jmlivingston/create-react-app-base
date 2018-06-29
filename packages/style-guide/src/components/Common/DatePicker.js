import { default as ReactDatePicker } from 'react-datepicker'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

class DatePicker extends PureComponent {
  state = {
    isLoaded: false
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  onChange = date => {
    this.props.onChange(date.toISOString())
  }

  bindData = async () => {
    // HACK: moment.js tends to be a memory hog
    // Note: dateHelper uses dayjs
    let moment = await import('moment')
    moment = moment.default
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
      <ThemeImporter sassNames={['date-picker']}>
        <ReactDatePicker onChange={this.onChange} selected={this.state.moment(this.props.value)} />
      </ThemeImporter>
    ) : null
  }
}

export default DatePicker
