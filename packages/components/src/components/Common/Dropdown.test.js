import React from 'react'
import ReactDOM from 'react-dom'
import Dropdown from './Dropdown'
import GlobalContainer from '../Global/GlobalContainer'

it('Dropdown - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Dropdown />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
