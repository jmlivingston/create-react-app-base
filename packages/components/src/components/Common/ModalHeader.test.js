import React from 'react'
import ReactDOM from 'react-dom'
import ModalHeader from './ModalHeader'
import GlobalContainer from '../Global/GlobalContainer'

it('ModalHeader - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ModalHeader />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
