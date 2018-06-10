// import { default as ReactDatePicker } from 'react-datepicker'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

// import ThemeImporter from 'components/Global/ThemeImporter'

// import Message from './DatePickerTemp'

class DatePicker extends Component {
  // state = {
  //   isLoaded: false
  // }

  // onChange = date => {
  //   this.props.onChange(date.toISOString())
  // }

  // bindData = async () => {
  //   // HACK: moment.js tends to be a memory hog
  //   // Note: dateHelper uses dayjs
  //   const moment = await import('moment')
  //   this.setState({
  //     moment,
  //     isLoaded: true
  //   })
  // }

  // componentDidMount() {
  //   this.bindData()
  // }

  render() {
    // return this.state.isLoaded ? (
    //   <ThemeImporter sassNames={['_date-picker']}>
    //     <ReactDatePicker onChange={this.onChange} selected={this.state.moment(this.props.value)} />
    //   </ThemeImporter>
    // ) : null
    return null
  }
}

DatePicker.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber1: PropTypes.number,
  optionalNumber2: PropTypes.number.isRequired,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  optionalNode: PropTypes.node,
  optionalElement: PropTypes.element,
  optionalMessage: PropTypes.instanceOf(Message),
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  optionalUnion: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Message)]),
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.instanceOf(Message),
    fontSize: PropTypes.number
  }),
  requiredFunc: PropTypes.func.isRequired,
  requiredAny: PropTypes.any.isRequired,
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.')
    }
  }
}

export default DatePicker
