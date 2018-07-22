import React, { Fragment } from 'react'

import JumbotronDefault from './JumbotronDefault'
import JumbotronFluid from './JumbotronFluid'

import JumbotronDefaultCode from '../../../code/components/Jumbotron/JumbotronDefaultCode'
import JumbotronFluidCode from '../../../code/components/Jumbotron/JumbotronFluidCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Jumbotron = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Jumbotron" name="JumbotronDefault" component={<JumbotronDefault />} code={JumbotronDefaultCode} {...props} />
				<StyleGuideWrapper title="Jumbotron" name="JumbotronFluid" component={<JumbotronFluid />} code={JumbotronFluidCode} {...props} />
    </Fragment>
  )
}

export default Jumbotron
    
