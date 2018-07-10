import React from 'react'
import ReactDOM from 'react-dom'
import ModalExternal from './ModalExternal'

it('ModalExternal - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ModalExternal />, div)
  ReactDOM.unmountComponentAtNode(div)
})
