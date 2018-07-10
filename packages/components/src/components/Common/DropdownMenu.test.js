import React from 'react'
import ReactDOM from 'react-dom'
import DropdownMenu from './DropdownMenu'
import GlobalContainer from '../Global/GlobalContainer'

it('DropdownMenu - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <DropdownMenu />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
