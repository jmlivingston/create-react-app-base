import React from 'react'
import ReactDOM from 'react-dom'
import Debugger from './Debugger'
import GlobalContainer from '../Global/GlobalContainer'

it('Debugger - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Debugger />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
