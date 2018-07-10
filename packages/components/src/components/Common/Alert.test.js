import React from 'react'
import ReactDOM from 'react-dom'
import Alert from './Alert'
import GlobalContainer from '../Global/GlobalContainer'

it('Alert - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Alert />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
