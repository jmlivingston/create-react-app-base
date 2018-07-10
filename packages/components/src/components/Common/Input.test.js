import React from 'react'
import ReactDOM from 'react-dom'
import Input from './Input'
import GlobalContainer from '../Global/GlobalContainer'

it('Input - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Input />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
