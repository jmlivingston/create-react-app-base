import React, { Fragment } from 'react'

import ModalBackdrop from './ModalBackdrop'
import ModalCustomTimeout from './ModalCustomTimeout'
import ModalDefault from './ModalDefault'
import ModalExternal from './ModalExternal'
import ModalFadeless from './ModalFadeless'
import ModalNested from './ModalNested'

import ModalBackdropCode from '../../../code/components/Modal/ModalBackdropCode'
import ModalCustomTimeoutCode from '../../../code/components/Modal/ModalCustomTimeoutCode'
import ModalDefaultCode from '../../../code/components/Modal/ModalDefaultCode'
import ModalExternalCode from '../../../code/components/Modal/ModalExternalCode'
import ModalFadelessCode from '../../../code/components/Modal/ModalFadelessCode'
import ModalNestedCode from '../../../code/components/Modal/ModalNestedCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Modal = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Modal" name="ModalBackdrop" component={<ModalBackdrop />} code={ModalBackdropCode} {...props} />
				<StyleGuideWrapper title="Modal" name="ModalCustomTimeout" component={<ModalCustomTimeout />} code={ModalCustomTimeoutCode} {...props} />
				<StyleGuideWrapper title="Modal" name="ModalDefault" component={<ModalDefault />} code={ModalDefaultCode} {...props} />
				<StyleGuideWrapper title="Modal" name="ModalExternal" component={<ModalExternal />} code={ModalExternalCode} {...props} />
				<StyleGuideWrapper title="Modal" name="ModalFadeless" component={<ModalFadeless />} code={ModalFadelessCode} {...props} />
				<StyleGuideWrapper title="Modal" name="ModalNested" component={<ModalNested />} code={ModalNestedCode} {...props} />
    </Fragment>
  )
}

export default Modal
    
