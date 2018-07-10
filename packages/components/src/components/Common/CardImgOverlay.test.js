import React from 'react'
import ReactDOM from 'react-dom'
import CardImgOverlay from './CardImgOverlay'
import GlobalContainer from '../Global/GlobalContainer'

it('CardImgOverlay - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardImgOverlay />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
