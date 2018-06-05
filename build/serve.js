const express = require('express')
const path = require('path')

const port = process.env.PORT || '3001'

const app = express()

app.use(express.static(path.join(__dirname)))

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
