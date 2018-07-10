import React from 'react'
import ReactDOM from 'react-dom'
import UncontrolledAlert from './UncontrolledAlert'
import GlobalContainer from '../Global/GlobalContainer'

it('UncontrolledAlert - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <UncontrolledAlert />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
