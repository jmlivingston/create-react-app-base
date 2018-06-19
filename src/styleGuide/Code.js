import { okaidia } from 'react-syntax-highlighter/styles/prism'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'

class Code extends PureComponent {
  state = {
    code: ''
  }
  static propTypes = {
    child: PropTypes.string.isRequired,
    parent: PropTypes.string.isRequired
  }
  componentDidMount() {
    import(`./code/components/${this.props.parent}/${this.props.child}`).then(component => {
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

export default Code
