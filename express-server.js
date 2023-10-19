const express = require('express')

const server = express()

try {
  server
    .post('/', (req, res) => {
      console.log('request comming')
      res.send('<p>hello world</p>')
    })

  server.listen(8080, () => {
    console.log(`Example app listening on port 8080`)
  })
} catch (error) {
  server.log.error(error)
  // process.exit()
}
