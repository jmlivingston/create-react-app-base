const express = require('express')
const path = require('path')

const port = process.env.PORT || '3001'

const app = express()

app.use(express.static(path.join(__dirname)))

// app.get('*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
// })

const isStatic = req => {
  return req.url.includes('.') && !req.url.includes('index.html')
}

app.get('/*', (req, res, next) => {
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
    res.sendFile(req.url) //, { root: clientDir })
  } else {
    res.render('index', { url: req.url })
  }
})

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
