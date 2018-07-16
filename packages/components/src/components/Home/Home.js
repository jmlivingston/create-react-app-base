import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

class Home extends PureComponent {

  render() {
    return (
      <Fragment>
        Test components here
      </Fragment>
    )
  }
}


Home.propTypes = {
  strings: PropTypes.object.isRequired
}

export default Home
