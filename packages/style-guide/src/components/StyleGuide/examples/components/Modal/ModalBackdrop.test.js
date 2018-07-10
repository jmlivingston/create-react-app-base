import React from 'react'
import ReactDOM from 'react-dom'
import ModalBackdrop from './ModalBackdrop'

it('ModalBackdrop - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ModalBackdrop />, div)
  ReactDOM.unmountComponentAtNode(div)
})
