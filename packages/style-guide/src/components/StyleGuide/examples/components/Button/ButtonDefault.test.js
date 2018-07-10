import React from 'react'
import ReactDOM from 'react-dom'
import ButtonDefault from './ButtonDefault'

it('ButtonDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
