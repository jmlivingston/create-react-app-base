const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

const clientDir = path.join(__dirname, '..', 'client')
const port = process.env.PORT || '3000'

const app = express()

app.use(express.static(path.join(__dirname)))
app.use(favicon(path.join(clientDir, 'favicon.ico')))

const isStatic = req => {
  return req.url.includes('.') && !req.url.includes('index.html')
}

app.get('/*', (req, res) => {
  if (isStatic(req)) {
    const extName = path.extname(req.url)
    req.url = req.url + '.gz'
    res.set('Content-Encoding', 'gzip')
    switch (extName) {
      case '.css':
        res.set('Content-Type', 'text/css')
        break
      case '.js':
        res.set('Content-Type', 'text/javascript')
        break
      case '.json':
        res.set('Content-Type', 'text/json')
        break
      case '.map':
        res.set('Content-Type', 'text/map')
        break
    }
    res.sendFile(req.url, { root: clientDir })
  } else {
    res.sendFile(path.join(clientDir, 'index.html'))
  }
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
