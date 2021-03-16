/*
 * @Descripttion: 
 * @version: 
 * @Author: leihao
 * @Date: 2020-12-23 10:04:53
 * @LastEditors: leihao
 * @LastEditTime: 2021-01-21 11:19:04
 */
const http = require('http');
const url = require('url')
const app = require('./router')//封装的express路由
const source = require('./mock')//静态数据

http.createServer(app).listen(8039, () => console.log('Server running at http://localhost:8039/'))

app.static('public')//注册静态路由

//事件循环，首先执行同步代码，去注册路由
app.get('/list', (req, res) => {
  const query = url.parse(req.url, true).query
  const limit = parseInt(query.limit)
  const skip = parseInt(query.skip)
  const data = source.data.map((i, index) => ({
    ...i, plat_goods_id: index, plat_goods_name: Math.random().toString().split('.')[1],

  }))
  const result = { data: data.slice(skip, skip + limit), total: source.total }

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
