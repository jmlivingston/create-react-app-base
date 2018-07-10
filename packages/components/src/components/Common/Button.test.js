import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import GlobalContainer from '../Global/GlobalContainer'

it('Button - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Button />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
