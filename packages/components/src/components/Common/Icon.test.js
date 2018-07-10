import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './Icon'
import GlobalContainer from '../Global/GlobalContainer'

it('Icon - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Icon />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
