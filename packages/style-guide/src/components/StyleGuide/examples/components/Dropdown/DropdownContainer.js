import React, { Fragment } from 'react'

import DropdownCustom from './DropdownCustom'
import DropdownDefault from './DropdownDefault'
import DropdownSizing from './DropdownSizing'
import DropdownUncontrolled from './DropdownUncontrolled'

import DropdownCustomCode from '../../../code/components/Dropdown/DropdownCustomCode'
import DropdownDefaultCode from '../../../code/components/Dropdown/DropdownDefaultCode'
import DropdownSizingCode from '../../../code/components/Dropdown/DropdownSizingCode'
import DropdownUncontrolledCode from '../../../code/components/Dropdown/DropdownUncontrolledCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Dropdown = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Dropdown" name="DropdownCustom" component={<DropdownCustom />} code={DropdownCustomCode} {...props} />
				<StyleGuideWrapper title="Dropdown" name="DropdownDefault" component={<DropdownDefault />} code={DropdownDefaultCode} {...props} />
				<StyleGuideWrapper title="Dropdown" name="DropdownSizing" component={<DropdownSizing />} code={DropdownSizingCode} {...props} />
				<StyleGuideWrapper title="Dropdown" name="DropdownUncontrolled" component={<DropdownUncontrolled />} code={DropdownUncontrolledCode} {...props} />
    </Fragment>
  )
}

export default Dropdown
    
