import React from 'react'
import ReactDOM from 'react-dom'
import ProgressStriped from './ProgressStriped'

it('ProgressStriped - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressStriped />, div)
  ReactDOM.unmountComponentAtNode(div)
})
