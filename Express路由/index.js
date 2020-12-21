const http = require('http');
const url = require('url')
const app = require('./router')

http.createServer(app).listen(8039, () => console.log('Server running at http://localhost:8039/'))

//事件循环，首先执行同步代码，去注册路由
app.get('/login', (req, res) => {
  res.end('login system')
})
app.get('/', (req, res) => {
  res.end('first index')
})