import React from 'react'
import ReactDOM from 'react-dom'
import ButtonGroup from './ButtonGroup'
import GlobalContainer from '../Global/GlobalContainer'

it('ButtonGroup - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ButtonGroup />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
