import React from 'react'
import ReactDOM from 'react-dom'
import ModalNested from './ModalNested'

it('ModalNested - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ModalNested />, div)
  ReactDOM.unmountComponentAtNode(div)
})
