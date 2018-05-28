import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/layout/App'
import config from './config'
import Example from './components/Alert/Alert'

// // REPLACE WITH SASS
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

storiesOf('App', module)
  .addDecorator(config.wrapper)
  .add('Example', () => <Example />)
