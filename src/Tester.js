import React, { Component } from 'react'
import { Collapse } from './components/common'

export default class Tester extends Component {
  state = {
    isCollapsed: false
  }
  toggleCollapse() {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }))
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleCollapse()}>Toggle Collapse</button>
        <Collapse isOpen={this.state.isCollapsed} timeout={0}>
          <div>I am collapse content</div>
        </Collapse>
      </div>
    )
  }
}
