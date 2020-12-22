const http = require('http');
const url = require('url')
const app = require('./router')//封装的express路由
const data = require('./const')//静态数据

http.createServer(app).listen(8039, () => console.log('Server running at http://localhost:8039/'))

//事件循环，首先执行同步代码，去注册路由
app.get('/login', (req, res) => {
  const query = url.parse(req.url, true).query
  const page_size = parseInt(query.page_size)
  const page = parseInt(query.page)

  const result = { data: data.data.slice((page - 1) * page_size, page * page_size), total: data.total }
  res.send(JSON.stringify(result), {
    status: 200,
    'content-type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
  })
})
app.get('/', (req, res) => {
  res.send('first index')
})
app.post('/doLogin', (req, res) => {
  res.send(req.body)
})