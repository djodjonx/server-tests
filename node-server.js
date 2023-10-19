const http = require('node:http')

try {
  const server = http.createServer((req, res) => {
    console.log('request coming Nodejs')
    res.writeHead(200)
    res.end('<p>Hello world</p>')
  })

  server.listen(8080, '127.0.0.1', () => {
    console.log(`Node Server is running on http://127.0.0.1:8080`)
  })
} catch (error) {
  console.error(error)
}