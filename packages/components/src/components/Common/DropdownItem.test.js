import React from 'react'
import ReactDOM from 'react-dom'
import DropdownItem from './DropdownItem'
import GlobalContainer from '../Global/GlobalContainer'

it('DropdownItem - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <DropdownItem />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
