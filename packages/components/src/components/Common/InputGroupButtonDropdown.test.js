import React from 'react'
import ReactDOM from 'react-dom'
import InputGroupButtonDropdown from './InputGroupButtonDropdown'
import GlobalContainer from '../Global/GlobalContainer'

it('InputGroupButtonDropdown - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <InputGroupButtonDropdown />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
