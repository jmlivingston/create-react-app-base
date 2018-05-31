import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Modal } from './Modal'
import { default as ModalBackdrop } from './ModalBackdrop'
import { default as ModalCustomTimeout } from './ModalCustomTimeout'
import { default as ModalExternal } from './ModalExternal'
import { default as ModalFadeless } from './ModalFadeless'
import { default as ModalNested } from './ModalNested'

storiesOf('Modal', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Modal />))
  .add('Backdrop', withInfo(config.defaults.info)(() => <ModalBackdrop />))
  .add('CustomTimeout', withInfo(config.defaults.info)(() => <ModalCustomTimeout />))
  .add('External', withInfo(config.defaults.info)(() => <ModalExternal />))
  .add('Fadeless', withInfo(config.defaults.info)(() => <ModalFadeless />))
  .add('Nested', withInfo(config.defaults.info)(() => <ModalNested />))
