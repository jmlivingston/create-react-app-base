import React from 'react'
import ReactDOM from 'react-dom'
import ModalFadeless from './ModalFadeless'

it('ModalFadeless - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ModalFadeless />, div)
  ReactDOM.unmountComponentAtNode(div)
})
