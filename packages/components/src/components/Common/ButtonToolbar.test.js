import React from 'react'
import ReactDOM from 'react-dom'
import ButtonToolbar from './ButtonToolbar'
import GlobalContainer from '../Global/GlobalContainer'

it('ButtonToolbar - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ButtonToolbar />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
