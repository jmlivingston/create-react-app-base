import React from 'react'
import ReactDOM from 'react-dom'
import ButtonDropdown from './ButtonDropdown'
import GlobalContainer from '../Global/GlobalContainer'

it('ButtonDropdown - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ButtonDropdown />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
