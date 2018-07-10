import React from 'react'
import ReactDOM from 'react-dom'
import DropdownToggle from './DropdownToggle'
import GlobalContainer from '../Global/GlobalContainer'

// TODO: Investigate if a valid test
it.skip('DropdownToggle - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <DropdownToggle />
    </GlobalContainer>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
