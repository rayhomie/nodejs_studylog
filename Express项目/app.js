/*
 * @Descripttion: 
 * @version: 
 * @Author: leihao
 * @Date: 2021-01-21 11:13:17
 * @LastEditors: leihao
 * @LastEditTime: 2021-01-22 16:54:44
 */

const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
//配置分布式session
const MongoStore = require('connect-mongo')(session)
const app = express()

//导入login路由模块
const login = require('./routes/login')


app.listen(3000)//异步最后执行

app.use((req, res, next) => {/*匹配任何路由*/
  console.log(new Date())

  next();/*表示匹配完成这个中间件以后程序继续向下执行*/
})

const cookieSigned = true

app.use(cookieParser(cookieSigned ? "xiaoduoai" : ""))


//配置静态web目录中间件
// app.use(express.static('static'))（默认）
app.use('/pub', express.static('static'));

//配置模板引擎
app.set("view engine", "ejs")

app.use(session({
  secret: "this is session secret",//用于服务器端生成session的签名
  name: "SID",//设置session的名字(返给客户端的cookie的键名)
  resave: false,//强制保存session即使它并没有变化
  saveUninitialized: true,//强制将未初始化的session存储
  cookie: { //（session是基于cookie的）
    maxAge: 1000 * 60,//单位ms，设置session的过期时间
    secure: false //true表示只有https协议才能访问session
  },
  store: new MongoStore({
    url: 'mongodb://127.0.0.1:27017/shop',
    touchAfter: 24 * 3600
  })//配置分布式session    
  //配置分布式session（当前url下的shop数据库）运行了该程序之后我们就可以到shop数据库中得sessions表中查看登录的session信息。
}))

app.get('/', (req, res) => {
  res.send(`你好Express
  <button onclick="handle(1,window.location.origin)" >注册</button>
  <button onclick="handle(2,window.location.origin)" >登陆</button>
  <script>
  function handle(type,host){
    switch(type){
      case 1:
      window.location.href=host+'/register';
      break;
      case 2:
      window.location.href=host+'/login';
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
  const username = req.signedCookies.username
  res.send('商品页面' + JSON.stringify(req.query) + username)
})

app.get('/ejs', (req, res) => {
  res.render('index', { title: '<h1>title<h1>' })
})

app.get('/register', (req, res) => {
  // 获取cookie 和 获取session
  res.send('注册页面' + (cookieSigned ? req.signedCookies.username : req.cookies.username || '') + (req.session.age || ''))
})

//挂载login模块
app.use('/', login)


app.use((req, res, next) => {
  res.status(404).send('404')
})

