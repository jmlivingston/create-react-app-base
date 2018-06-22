import { okaidia } from 'react-syntax-highlighter/styles/prism'
import Clipboard from 'react-clipboard.js'
import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'

class Code extends PureComponent {
  state = {
    code: ''
  }
  static propTypes = {
    child: PropTypes.string.isRequired,
    label: PropTypes.string,
    parent: PropTypes.string.isRequired
  }

  static defaultProps = {
    label: 'Code'
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
      <Fragment>
        <h3 className="float-left">{this.props.label}</h3>
        <Clipboard data-clipboard-text={this.state.code} className="btn btn-primary float-right">
          Copy
        </Clipboard>
        <div className="clearfix" />
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {this.state.code}
        </SyntaxHighlighter>
      </Fragment>
    )
  }
}

export default Code
