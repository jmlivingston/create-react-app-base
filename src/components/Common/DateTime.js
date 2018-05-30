import PropTypes from 'prop-types'
import React, { Component } from 'react'

import DATE from 'config/dateConstants'
import dateHelper from 'helpers/dateHelper'

class DateTime extends Component {
  state = { dateText: '' }
  static defaultProps = {
    dateFormat: DATE.DATE
  }

  dataBind = () => {
    const dateText = dateHelper.format(this.props.date || new Date(), this.props.dateFormat)
    this.setState({
      dateText
    })
  }

  componentDidMount() {
    this.dataBind()
  }

  render() {
    return <span title={this.state.dateText}>{this.state.dateText}</span>
  }
}

DateTime.displayName = 'DateTime'
DateTime.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  dateFormat: PropTypes.string
}

export default DateTime
