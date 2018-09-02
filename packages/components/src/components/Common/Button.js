import { Button as ReactStrapButton } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const Button = props => {
  return (
    <ThemeImporter sassNames={['buttons']}>
      <ReactStrapButton {...props} />
    </ThemeImporter>
  )
}

Button.propTypes = ReactStrapButton.propTypes

export default Button




// import { Button as ReactStrapButton } from 'reactstrap'
// import { css } from 'emotion'
// import React from 'react'

// import code from '../../styles/themes/darkly/components/buttons'

// const className = css(code)

// const Button = props => {
//   return (
//     <div className={className}>
//       <ReactStrapButton {...props} />
//     </div>
//   )
// }

// Button.propTypes = ReactStrapButton.propTypes

// export default Button