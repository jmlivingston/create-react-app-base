import React from 'react'
import ReactDOM from 'react-dom'
import Tooltip from './Tooltip'
import GlobalContainer from '../Global/GlobalContainer'

it('Tooltip - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Tooltip />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
