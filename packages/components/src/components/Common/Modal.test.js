import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import GlobalContainer from '../Global/GlobalContainer'

it('Modal - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Modal />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
