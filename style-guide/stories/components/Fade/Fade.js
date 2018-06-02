import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Button, Fade } from 'components/Common'
import config from '../../config'

storiesOf('Fade', module)
  .addDecorator(config.wrapper)
  .add(
    'Default',
    withInfo(config.defaults.info)(() => (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Toggle Fade
        </Button>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={10}>
          This content will fade in and out as the button is pressed
        </Fade>
      </div>
    ))
  )
