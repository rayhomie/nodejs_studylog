/*
 * @Descripttion: 
 * @version: 
 * @Author: leihao
 * @Date: 2021-01-21 11:13:17
 * @LastEditors: leihao
 * @LastEditTime: 2021-01-22 14:42:33
 */

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.listen(3000)//异步最后执行

app.use((req, res, next) => {/*匹配任何路由*/
  console.log(new Date())

  next();/*表示匹配完成这个中间件以后程序继续向下执行*/
})
app.use(cookieParser())

//配置静态web目录中间件
// app.use(express.static('static'))（默认）
app.use('/pub', express.static('static'));

//配置模板引擎
app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.send(`你好Express
  <button onclick="handle(1)" >注册</button>
  <button onclick="handle(2)" >登陆</button>
  <script>
  function handle(type){
    switch(type){
      case 1:
      window.location.href='http://localhost:3000/register';
      break;
      case 2:
      window.location.href='http://localhost:3000/login';
    }
  }
  </script>`)
})

//动态路由http://localhost:3000/article/add
app.get('/article/add', (req, res, next) => {
  console.log('执行增加新闻')
  next()
})

app.get('/article/:id', (req, res) => {
  res.send('动态路由' + req.params.id)//动态路由add
})
app.get('/product', (req, res) => {
  res.send('商品页面' + JSON.stringify(req.query))
})

app.get('/login', (req, res) => {
  // 设置cookie（maxAge单位ms）
  res.cookie('username', 'zhangsan', { maxAge: 1000 * 60 * 60 })
  res.send('登录页面')
})
app.get('/register', (req, res) => {
  // 获取cookie
  res.send('注册页面' + (req.cookies.username || ''))
})

app.get('/ejs', (req, res) => {
  res.render('index', { title: '<h1>title<h1>' })
})

app.use((req, res, next) => {
  res.status(404).send('404')
})