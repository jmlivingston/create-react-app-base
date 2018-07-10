import React from 'react'
import ReactDOM from 'react-dom'
import TabContent from './TabContent'
import GlobalContainer from '../Global/GlobalContainer'

it('TabContent - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <TabContent />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
