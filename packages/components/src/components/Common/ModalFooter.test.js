import React from 'react'
import ReactDOM from 'react-dom'
import ModalFooter from './ModalFooter'
import GlobalContainer from '../Global/GlobalContainer'

it('ModalFooter - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ModalFooter />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
