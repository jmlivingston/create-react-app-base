import React from 'react'
import ReactDOM from 'react-dom'
import Fade from './Fade'
import GlobalContainer from '../Global/GlobalContainer'

it('Fade - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Fade />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
