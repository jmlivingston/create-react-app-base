import React from 'react'
import ReactDOM from 'react-dom'
import InputGroupAddon from './InputGroupAddon'
import GlobalContainer from '../Global/GlobalContainer'

it('InputGroupAddon - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <InputGroupAddon />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
