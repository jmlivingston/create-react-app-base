import React from 'react'
import ReactDOM from 'react-dom'
import Error from './Error'
import GlobalContainer from '../Global/GlobalContainer'

it('Error - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Error />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
