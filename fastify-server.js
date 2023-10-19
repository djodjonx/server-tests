const Fastify = require('fastify')

const server = Fastify({
  logger: true,
})

try {
  server
    .post('/', () => '<p>hello world</p>')

  server.listen({
    port: 8080,
    host: '127.0.0.1',
  })
} catch (error) {
  server.log.error(error)
  // process.exit()
}
