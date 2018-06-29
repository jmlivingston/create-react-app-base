const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

const screenshotDir = path.join(__dirname, 'screenshots')
const baseUrl = 'http://localhost:3000/'

const urls = [
  {
    url: baseUrl + '/',
    title: 'Home',
    isEnabled: true
  }
]

const resolutions = [
  {
    width: 320,
    height: 568,
    title: 'Phone - Small',
    isMobile: true,
    isLandscape: false,
    hasTouch: true
  },
  {
    width: 375,
    height: 667,
    title: 'Phone - Medium',
    isMobile: true,
    isLandscape: false,
    hasTouch: true
  },
  {
    width: 414,
    height: 736,
    title: 'Phone - Large',
    isMobile: true,
    isLandscape: false,
    hasTouch: true
  },
  {
    width: 768,
    height: 1024,
    title: 'Tablet',
    isMobile: true,
    isLandscape: false,
    hasTouch: true
  },
  {
    width: 1024,
    height: 768,
    title: 'Desktop - Small'
  },
  {
    width: 1366,
    height: 768,
    title: 'Desktop - Medium'
  },
  {
    width: 1920,
    height: 1080,
    title: 'Desktop - Large'
  }
]
;(async () => {
  console.log('Building Screenshots') // eslint-disable-line no-console
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir)
  }
  const browser = await puppeteer.launch({
    slowMo: 500
  })
  const page = await browser.newPage()
  for (const url of urls) {
    if (url.isEnabled) {
      await page.goto(url.url, { waitUntil: 'networkidle0' })
      for (const resolution of resolutions) {
        page.setViewport({ width: resolution.width, height: resolution.height })
        const screenshotPath = path.join(
          screenshotDir,
          url.title + ' - ' + resolution.title + ' (' + resolution.width + 'x' + resolution.height + ').png'
        )
        console.log(screenshotPath) // eslint-disable-line no-console
        await page.screenshot({ path: screenshotPath })
      }
    }
  }
  await browser.close()
  console.log('Screenshots Complete - ' + screenshotDir) // eslint-disable-line no-console
})()
