import React from 'react'

import ButtonDefault from './ButtonDefault'
import ButtonDropdownDefault from './ButtonDropdownDefault'
import ButtonDropdownMulti from './ButtonDropdownMulti'
import ButtonDropdownMultiSplit from './ButtonDropdownMultiSplit'
import ButtonGroupDefault from './ButtonGroupDefault'
import ButtonOutline from './ButtonOutline'
import ButtonStateful from './ButtonStateful'
import ButtonToolbarDefault from './ButtonToolbarDefault'

import ButtonDefaultCode from '../../../code/components/Button/ButtonDefaultCode'
import ButtonDropdownDefaultCode from '../../../code/components/Button/ButtonDropdownDefaultCode'
import ButtonDropdownMultiCode from '../../../code/components/Button/ButtonDropdownMultiCode'
import ButtonDropdownMultiSplitCode from '../../../code/components/Button/ButtonDropdownMultiSplitCode'
import ButtonGroupDefaultCode from '../../../code/components/Button/ButtonGroupDefaultCode'
import ButtonOutlineCode from '../../../code/components/Button/ButtonOutlineCode'
import ButtonStatefulCode from '../../../code/components/Button/ButtonStatefulCode'
import ButtonToolbarDefaultCode from '../../../code/components/Button/ButtonToolbarDefaultCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Button = props => {
  return (
    <StyleGuideWrapper title="Button" {...props}>
      <StyleGuideComponent title="Button" name="ButtonDefault" component={<ButtonDefault />} code={ButtonDefaultCode} />
      <StyleGuideComponent
        title="Button"
        name="ButtonDropdownDefault"
        component={<ButtonDropdownDefault />}
        code={ButtonDropdownDefaultCode}
      />
      <StyleGuideComponent
        title="Button"
        name="ButtonDropdownMulti"
        component={<ButtonDropdownMulti />}
        code={ButtonDropdownMultiCode}
      />
      <StyleGuideComponent
        title="Button"
        name="ButtonDropdownMultiSplit"
        component={<ButtonDropdownMultiSplit />}
        code={ButtonDropdownMultiSplitCode}
      />
      <StyleGuideComponent
        title="Button"
        name="ButtonGroupDefault"
        component={<ButtonGroupDefault />}
        code={ButtonGroupDefaultCode}
      />
      <StyleGuideComponent title="Button" name="ButtonOutline" component={<ButtonOutline />} code={ButtonOutlineCode} />
      <StyleGuideComponent
        title="Button"
        name="ButtonStateful"
        component={<ButtonStateful />}
        code={ButtonStatefulCode}
      />
      <StyleGuideComponent
        title="Button"
        name="ButtonToolbarDefault"
        component={<ButtonToolbarDefault />}
        code={ButtonToolbarDefaultCode}
      />
    </StyleGuideWrapper>
  )
}

export default Button
