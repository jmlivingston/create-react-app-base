import React from 'react'
import ReactDOM from 'react-dom'
import TabPane from './TabPane'
import GlobalContainer from '../Global/GlobalContainer'

it('TabPane - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <TabPane />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
