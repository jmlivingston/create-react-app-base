import React from 'react'

import DropdownCustom from './DropdownCustom'
import DropdownDefault from './DropdownDefault'
import DropdownSizing from './DropdownSizing'
import DropdownUncontrolled from './DropdownUncontrolled'

import DropdownCustomCode from '../../../code/components/Dropdown/DropdownCustomCode'
import DropdownDefaultCode from '../../../code/components/Dropdown/DropdownDefaultCode'
import DropdownSizingCode from '../../../code/components/Dropdown/DropdownSizingCode'
import DropdownUncontrolledCode from '../../../code/components/Dropdown/DropdownUncontrolledCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Dropdown = props => {
  return (
    <StyleGuideWrapper title="Dropdown" {...props}>
      <StyleGuideComponent
        title="Dropdown"
        name="DropdownCustom"
        component={<DropdownCustom />}
        code={DropdownCustomCode}
      />
      <StyleGuideComponent
        title="Dropdown"
        name="DropdownDefault"
        component={<DropdownDefault />}
        code={DropdownDefaultCode}
      />
      <StyleGuideComponent
        title="Dropdown"
        name="DropdownSizing"
        component={<DropdownSizing />}
        code={DropdownSizingCode}
      />
      <StyleGuideComponent
        title="Dropdown"
        name="DropdownUncontrolled"
        component={<DropdownUncontrolled />}
        code={DropdownUncontrolledCode}
      />
    </StyleGuideWrapper>
  )
}

export default Dropdown
