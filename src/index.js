import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

class Dynamic extends Component {
  state = {
    module: null
  }
  componentDidMount() {
    import(`${
      process.env.REACT_APP_TYPE === 'STYLE_GUIDE' ? './style-guide/StyleGuideApp' : './components/Global/App'
    }`).then(module => this.setState({ module: module.default }))
  }
  render() {
    const Component = this.state.module
    return <div>{Component && <Component />}</div>
  }
}

ReactDOM.render(<Dynamic />, document.getElementById('root'))
