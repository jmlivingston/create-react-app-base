import React from 'react'
import ReactDOM from 'react-dom'
import InputGroup from './InputGroup'
import GlobalContainer from '../Global/GlobalContainer'

it('InputGroup - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <InputGroup />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
