import React from 'react'

import JumbotronDefault from './JumbotronDefault'
import JumbotronFluid from './JumbotronFluid'

import JumbotronDefaultCode from '../../../code/components/Jumbotron/JumbotronDefaultCode'
import JumbotronFluidCode from '../../../code/components/Jumbotron/JumbotronFluidCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Jumbotron = props => {
  return (
    <StyleGuideWrapper title="Jumbotron" {...props}>
      <StyleGuideComponent
        title="Jumbotron"
        name="JumbotronDefault"
        component={<JumbotronDefault />}
        code={JumbotronDefaultCode}
      />
      <StyleGuideComponent
        title="Jumbotron"
        name="JumbotronFluid"
        component={<JumbotronFluid />}
        code={JumbotronFluidCode}
      />
    </StyleGuideWrapper>
  )
}

export default Jumbotron
