import PropTypes from 'prop-types'
import React, { PureComponent, Fragment } from 'react'

import { DatePicker, Loader } from 'components/Common'
import LocalizationTester from 'components/LocalizationTester/LocalizationTester'

class Home extends PureComponent {
  state = {
    date: new Date().toISOString()
  }

  dateChange = date => {
    this.setState({ date })
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.strings.title}</h1>
        <p>{this.props.strings.description}</p>
        <LocalizationTester />
        <div className="pb-2" />
        <DatePicker value={this.state.date} onChange={this.dateChange} />
        <Loader pastDelay={true} message="Testing Loader..." />
      </Fragment>
    )
  }
}

Home.propTypes = {
  strings: PropTypes.object.isRequired
}

export default Home
