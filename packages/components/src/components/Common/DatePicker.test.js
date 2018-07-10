import React from 'react'
import ReactDOM from 'react-dom'
import DatePicker from './DatePicker'
import GlobalContainer from '../Global/GlobalContainer'

it('DatePicker - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <DatePicker onChange={() => {}} />
    </GlobalContainer>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
