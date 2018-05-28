import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import App from 'components/layout/App'
import config from 'stories/config'
	import { default as Modal } from './Modal'
	import { default as ModalBackdrop } from './ModalBackdrop'
	import { default as ModalCustomTimeout } from './ModalCustomTimeout'
	import { default as ModalExternal } from './ModalExternal'
	import { default as ModalFadeless } from './ModalFadeless'
	import { default as ModalNested } from './ModalNested'

storiesOf('Modal', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Modal />)
.add('Backdrop', () => <ModalBackdrop />)
.add('CustomTimeout', () => <ModalCustomTimeout />)
.add('External', () => <ModalExternal />)
.add('Fadeless', () => <ModalFadeless />)
.add('Nested', () => <ModalNested />)
