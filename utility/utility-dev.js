const fs = require('fs')
const os = require('os')
const path = require('path')

const TYPES = {
  IDE_TOGGLE_FILES: 'IDE_TOGGLE_FILES'
}

try {
  const args = process.argv.slice(2)
  const type = TYPES[args[0].toUpperCase()]
  if (type) {
    switch (type) {
      case TYPES.IDE_TOGGLE_FILES:
        const userSettingsPath =
          os.platform() === 'darwin'
            ? path.join(os.homedir(), 'Library/Application Support/Code/User/settings.json') // OSX
            : path.join(os.homedir(), 'User/settings.json') // Windows
        const userSettings = require(userSettingsPath)
        userSettings['files.exclude'] = Object.keys(userSettings['files.exclude']).reduce((acc, key) => {
          return {
            ...acc,
            [key]: !userSettings['files.exclude'][key]
          }
        }, {})
        fs.writeFileSync(userSettingsPath, JSON.stringify(userSettings, null, 2))
        break
      default:
        break
    }
  } else {
    console.log('Error: type required')
  }
} catch (error) {
  console.log('Error: Unknown Error - ' + error)
}
