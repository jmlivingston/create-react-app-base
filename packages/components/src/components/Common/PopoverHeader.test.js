import React from 'react'
import ReactDOM from 'react-dom'
import PopoverHeader from './PopoverHeader'
import GlobalContainer from '../Global/GlobalContainer'

it('PopoverHeader - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <PopoverHeader />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
