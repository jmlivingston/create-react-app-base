import Loadable from 'react-loadable'
import React from 'react'
import ReactDOM from 'react-dom'

const App = Loadable({
  loader: () =>
    import(`${
      process.env.REACT_APP_TYPE === 'STYLE_GUIDE' ? './style-guide/StyleGuideApp' : './components/Global/App'
    }`),
  loading: () => <div />
})

ReactDOM.render(<App />, document.getElementById('root'))
