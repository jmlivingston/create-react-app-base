const fs = require('fs')
const path = require('path')
const cssToJss = require('../node_modules/jss-cli').cssToJss
const sass = require('node-sass')

const convertSassToCss = file => {
  sass.render(
    {
      file
    },
    (err, result) => {
      if (!err) {
        const jss = cssToJss({ code: result.css.toString() })
        fs.writeFileSync(
          file.replace(/.scss/g, '.js'),
          `const code = ${JSON.stringify(jss['@global'], null, 2)} \r\n export default code`
        )
      } else {
        console.log('Error: ' + err)
      }
    }
  )
}

convertSassToCss(path.join(__dirname, '../packages/components/src/styles/themes/darkly/components/buttons.scss'))
