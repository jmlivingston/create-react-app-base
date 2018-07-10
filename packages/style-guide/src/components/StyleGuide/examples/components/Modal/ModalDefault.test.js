import React from 'react'
import ReactDOM from 'react-dom'
import ModalDefault from './ModalDefault'

it('ModalDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ModalDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
