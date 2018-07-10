import React from 'react'
import ReactDOM from 'react-dom'
import Media from './Media'
import GlobalContainer from '../Global/GlobalContainer'

it('Media - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Media />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
