import React from 'react'
import ReactDOM from 'react-dom'
import CustomInput from './CustomInput'
import GlobalContainer from '../Global/GlobalContainer'

it('CustomInput - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CustomInput />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
