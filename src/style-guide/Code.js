import { okaidia } from 'react-syntax-highlighter/styles/prism'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'

export default class PropTypesTable extends Component {
  state = {
    code: ''
  }
  static propTypes = {
    child: PropTypes.string.isRequired,
    parent: PropTypes.string.isRequired
  }
  componentDidMount() {
    import(`style-guide/code/components/${this.props.parent}/${this.props.child}`).then(component => {
      this.setState({
        code: component.default
      })
    })
  }
  render() {
    return (
      <SyntaxHighlighter language="javascript" style={okaidia}>
        {this.state.code}
      </SyntaxHighlighter>
    )
  }
}
