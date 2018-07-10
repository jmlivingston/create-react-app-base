import React from 'react'
import ReactDOM from 'react-dom'
import UncontrolledDropdown from './UncontrolledDropdown'
import GlobalContainer from '../Global/GlobalContainer'

it('UncontrolledDropdown - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <UncontrolledDropdown />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
