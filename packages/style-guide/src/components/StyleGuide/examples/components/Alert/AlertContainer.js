import React, { Fragment } from 'react'

import AlertContent from './AlertContent'
import AlertDefault from './AlertDefault'
import AlertDismiss from './AlertDismiss'
import AlertLink from './AlertLink'
import AlertUncontrolledDismiss from './AlertUncontrolledDismiss'

import AlertContentCode from '../../../code/components/Alert/AlertContentCode'
import AlertDefaultCode from '../../../code/components/Alert/AlertDefaultCode'
import AlertDismissCode from '../../../code/components/Alert/AlertDismissCode'
import AlertLinkCode from '../../../code/components/Alert/AlertLinkCode'
import AlertUncontrolledDismissCode from '../../../code/components/Alert/AlertUncontrolledDismissCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Alert = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Alert" name="AlertContent" component={<AlertContent />} code={AlertContentCode} {...props} />
				<StyleGuideWrapper title="Alert" name="AlertDefault" component={<AlertDefault />} code={AlertDefaultCode} {...props} />
				<StyleGuideWrapper title="Alert" name="AlertDismiss" component={<AlertDismiss />} code={AlertDismissCode} {...props} />
				<StyleGuideWrapper title="Alert" name="AlertLink" component={<AlertLink />} code={AlertLinkCode} {...props} />
				<StyleGuideWrapper title="Alert" name="AlertUncontrolledDismiss" component={<AlertUncontrolledDismiss />} code={AlertUncontrolledDismissCode} {...props} />
    </Fragment>
  )
}

export default Alert
    
