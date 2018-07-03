const child_process = require('child_process')

const buildCopy = require('./build-copy').buildCopy

const APP_NAMES = {
  APP: 'app',
  COMPONENTS: 'components',
  STYLE_GUIDE: 'style-guide'
}

const LAUNCH_TYPES = {
  START: 'START',
  BUILD: 'BUILD',
  BUILDX: 'BUILD',
  BUILD_START: 'BUILD_START',
  DEPLOY: 'DEPLOY',
  TEST: 'TEST'
}

try {
  const args = process.argv.slice(2)

  const appName = APP_NAMES[args[0].toUpperCase()]
  const launchType = LAUNCH_TYPES[args[1].toUpperCase()]

  if (appName && launchType) {
    switch (launchType) {
      case LAUNCH_TYPES.START:
        child_process.execSync(`cd packages/${appName} && react-scripts start`, {
          stdio: 'inherit'
        })
        break
      case LAUNCH_TYPES.BUILD:
        child_process.execSync(`cd packages/${appName} && react-scripts build`, {
          stdio: 'inherit'
        })
        buildCopy(appName)
        child_process.execSync(
          `gzip -9 -r packages/${appName}/deploy/client/static && gzip -9 -r packages/${appName}/deploy/client/service-worker.js`,
          {
            stdio: 'inherit'
          }
        )
        break
      case LAUNCH_TYPES.BUILD_START:
        child_process.execSync(`cd packages/${appName}/deploy && yarn && yarn start`, {
          stdio: 'inherit'
        })
        break
      case LAUNCH_TYPES.DEPLOY:
        child_process.execSync(`git subtree push --prefix packages/${appName}/deploy origin deploy-${appName}`, {
          stdio: 'inherit'
        })
        break
      case LAUNCH_TYPES.TEST:
        child_process.execSync(`cd packages/${appName} && react-scripts test --env=jsdom`, {
          stdio: 'inherit'
        })
        break
    }
  } else {
    console.log('Error: app name and launch type required')
  }
} catch (error) {
  console.log('Error: Uknown Error - ' + error)
}
