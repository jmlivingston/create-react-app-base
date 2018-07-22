import React, { Fragment } from 'react'

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
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Button = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Button" name="ButtonDefault" component={<ButtonDefault />} code={ButtonDefaultCode} {...props} />
				<StyleGuideWrapper title="Button" name="ButtonDropdownDefault" component={<ButtonDropdownDefault />} code={ButtonDropdownDefaultCode} {...props} />
				<StyleGuideWrapper title="Button" name="ButtonDropdownMulti" component={<ButtonDropdownMulti />} code={ButtonDropdownMultiCode} {...props} />
				<StyleGuideWrapper title="Button" name="ButtonDropdownMultiSplit" component={<ButtonDropdownMultiSplit />} code={ButtonDropdownMultiSplitCode} {...props} />
				<StyleGuideWrapper title="Button" name="ButtonGroupDefault" component={<ButtonGroupDefault />} code={ButtonGroupDefaultCode} {...props} />
				<StyleGuideWrapper title="Button" name="ButtonOutline" component={<ButtonOutline />} code={ButtonOutlineCode} {...props} />
				<StyleGuideWrapper title="Button" name="ButtonStateful" component={<ButtonStateful />} code={ButtonStatefulCode} {...props} />
				<StyleGuideWrapper title="Button" name="ButtonToolbarDefault" component={<ButtonToolbarDefault />} code={ButtonToolbarDefaultCode} {...props} />
    </Fragment>
  )
}

export default Button
    
