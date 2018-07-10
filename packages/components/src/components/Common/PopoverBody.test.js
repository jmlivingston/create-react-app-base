import React from 'react'
import ReactDOM from 'react-dom'
import PopoverBody from './PopoverBody'
import GlobalContainer from '../Global/GlobalContainer'

it('PopoverBody - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <PopoverBody />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
