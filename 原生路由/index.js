const http = require('http');
const url = require('url')
const router = require('./router')

http.createServer((req, res) => {
  router.static(req, res, 'static');
  const path_name = url.parse(req.url).pathname.replace('/', '')
  try {
    router[path_name](req, res)
  } catch (error) {
    router['notFound'](req, res)
  }
}).listen(8039,
  () => console.log('Server running at http://localhost:8039/'))