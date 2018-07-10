import React from 'react'
import ReactDOM from 'react-dom'
import GlobalImporter from './GlobalImporter'

it('GlobalImporter - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GlobalImporter appName="" render={() => {}} stringName={[]} user={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
