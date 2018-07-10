import React from 'react'
import ReactDOM from 'react-dom'
import Table from './Table'
import GlobalContainer from '../Global/GlobalContainer'

it('Table - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Table />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
