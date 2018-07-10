import React from 'react'
import ReactDOM from 'react-dom'
import ModalBody from './ModalBody'
import GlobalContainer from '../Global/GlobalContainer'

it('ModalBody - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ModalBody />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
