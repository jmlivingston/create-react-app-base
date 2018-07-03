import Loadable from 'react-loadable'
import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

const CodeInner = ({ code, label, language }) => {
  const CodeInner = Loadable.Map({
    loader: {
      Clipboard: () => import('react-clipboard.js'),
      SyntaxHighlighter: () => import('react-syntax-highlighter/prism'),
      okaidia: () => import('react-syntax-highlighter/styles/prism/okaidia')
    },
    loading: () => null,
    render(loaded) {
      const Clipboard = loaded.Clipboard.default
      const SyntaxHighlighter = loaded.SyntaxHighlighter.default
      const okaidia = loaded.okaidia.default
      return (
        <Fragment>
          {label && <h3 className="float-left">{label}</h3>}
          <Clipboard data-clipboard-text={code} className="btn btn-primary float-right">
            Copy
          </Clipboard>
          <div className="clearfix" />
          <SyntaxHighlighter language={language} style={okaidia}>
            {code}
          </SyntaxHighlighter>
        </Fragment>
      )
    }
  })
  return <CodeInner />
}

CodeInner.propTypes = {
  code: PropTypes.string,
  label: PropTypes.string,
  language: PropTypes.string
}

class Code extends PureComponent {
  state = {
    code: ''
  }

  static propTypes = {
    code: PropTypes.string,
    label: PropTypes.string,
    language: PropTypes.string
  }

  static defaultProps = {
    label: 'Code',
    language: 'javascript'
  }

  componentDidMount() {
    this.setState({
      code: this.props.code
    })
  }

  render() {
    return <CodeInner code={this.state.code} label={this.props.label} language={this.props.language} />
  }
}

export default Code
