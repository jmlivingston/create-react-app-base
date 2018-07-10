import React from 'react'
import ReactDOM from 'react-dom'
import UncontrolledTooltip from './UncontrolledTooltip'
import GlobalContainer from '../Global/GlobalContainer'

it('UncontrolledTooltip - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <UncontrolledTooltip />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
