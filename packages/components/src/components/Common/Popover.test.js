import React from 'react'
import ReactDOM from 'react-dom'
import Popover from './Popover'
import GlobalContainer from '../Global/GlobalContainer'

it('Popover - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Popover />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
