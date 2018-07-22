import React from 'react'

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

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Alert = props => {
  return (
    <StyleGuideWrapper title="Alert" {...props}>
      <StyleGuideComponent title="Alert" name="AlertContent" component={<AlertContent />} code={AlertContentCode} />
      <StyleGuideComponent title="Alert" name="AlertDefault" component={<AlertDefault />} code={AlertDefaultCode} />
      <StyleGuideComponent title="Alert" name="AlertDismiss" component={<AlertDismiss />} code={AlertDismissCode} />
      <StyleGuideComponent title="Alert" name="AlertLink" component={<AlertLink />} code={AlertLinkCode} />
      <StyleGuideComponent
        title="Alert"
        name="AlertUncontrolledDismiss"
        component={<AlertUncontrolledDismiss />}
        code={AlertUncontrolledDismissCode}
      />
    </StyleGuideWrapper>
  )
}

export default Alert
