import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from '../App'
import Example from './components/Alert/Alert'

// REPLACE WITH SASS
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

storiesOf('App', module)
  .add('SVG / SASS Test', () => <App />)
  .add('Example', () => <Example />)
