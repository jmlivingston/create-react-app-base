import React from 'react'
import ReactDOM from 'react-dom'
import Progress from './Progress'
import GlobalContainer from '../Global/GlobalContainer'

it('Progress - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Progress />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
