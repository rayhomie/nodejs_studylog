const koa = require('koa')

const app = new koa()

/* koa-static静态资源中间件
让路由优先匹配处理返回静态资源，找不到再返回逻辑接口。
①`npm i koa-static --save`
②`const static = require('koa-static')`
③配置中间件`app.use(static('static'))`
*/
const static = require('koa-static')
// app.use(static(__dirname + '/static'))// 指定静态目录绝对路径
app.use(static('./static'))// 去项目目录下的static目录下找
app.use(static('./public'))// 可配置多个静态目录，继续去public目录下面找


/*
ejs模板的使用：
1、npm i koa-views --save
2、npm i ejs --save
3、app.use(views('views',{ extension: 'ejs'}))// 第一个参数是目录名
4、await ctx.render('index')
*/
const views = require('koa-views');
//配置模板引擎中间件--第三方中间件
//app.use(views('views',{map: {html: 'ejs'}}));//这样配置也可以：注意如果这样配置的话，模板的后缀名是.html
app.use(views('views', { extension: 'ejs' }));

const router = require('koa-router')()
// 配置路由

// 中间件

/* express写法
app.use((req,res,next) =>{
    res.send('返回数据')
})
*/

// app.use(async (ctx) => {
//   ctx.body = '你好 koa2'
// })

/*koa-bodyparser中间件获取post数据
①安装`npm i --save koa-bodyparser`
②引入模块`const bodyParser=require(koa-bodyparser)`
③`app.use(bodyParser())`
④`ctx.request.body`获取表单POST传值
*/
const bodyParser = require('koa-bodyparser');
app.use(bodyParser())

// app.use(async ctx => {// ctx.request.body就可以获取到post传值
//   console.log(ctx.request.body)
//   ctx.body = ctx.request.body;
// })



router.get('/', async (ctx) => {
  await ctx.render('index')// 使用ejs模板
})

router.get('/news', async (ctx) => {
  ctx.body = '新闻列表页面'
})
// GET传值
router.get('/newscontent', async (ctx) => {
  // 访问地址http://localhost:3000/newscontent?aid=233&name=zhangsan
  // 方式一：从ctx中读取get传值
  console.log(ctx.query)// { aid:'233', name:'zhangsan'}获取的是对象，用的最多的方式
  console.log(ctx.querystring)// aid=233&name=zhangsan获取的是一个字符串
  console.log(ctx.url)// /newscontent?aid=233&name=zhangsan
  // 方式二：ctx里面的request里面获取get传值
  console.log(ctx.request.query)// { aid:'233', name:'zhangsan' }
  console.log(ctx.request.querystring)// aid=233&name=zhangsan
  console.log(ctx.request.url)// /newscontent?aid=233&name=zhangsan
  ctx.body = '新闻详情'
})

// 动态路由里面可以传多个值
router.get('/article/:aid/:cid', async (ctx) => {
  // 访问地址http://localhost:3000/newscontent/123/456
  // 获取动态路由的传值
  console.log(ctx.params)// { aid:'123',cid:'456'}
})

// 异步获取数据
const getPostData = (ctx) => {
  return new Promise((resolve, reject) => {
    try {
      let str = '';
      ctx.req.on('data', (chunk) => {
        str += chunk;
      })
      ctx.req.on('end', () => {
        resolve(str)
      })
    } catch (error) {
      reject(error)
    }
  })
}

// 原生获取post提交的数据
router.post('/doAdd', async (ctx) => {
  // 获取表单提交的数据
  const data = await getPostData(ctx);
  console.log(data)
  ctx.body = data
})

/* koa中cookie的使用：
设置cookie
ctx.cookies.set(name,value,[options])
获取cookie
ctx.cookies.get('name')
*/
router.get('/cookie', async (ctx) => {
  // 正常这样配置就可以使用
  // 注意：koa中没法直接设置中文的cookie
  const data = new Buffer('我是雷浩').toString('base64')
  ctx.cookies.set('userInfo', data, {
    maxAge: 60 * 1000 * 60// 一小时后过期
  })
})

router.get('/cookie/getcookie', async (ctx) => {
  const data = ctx.cookies.get('userInfo')
  console.log(new Buffer(data, 'base64').toString())// 我是雷浩
})

/* koa-session的使用：
1.npm i koa-session --save 
2.引入session
3.根据官网配置中间件
*/
const session = require('koa-session')
app.keys = ['some secret hurr'];/*cookie的签名*/

const CONFIG = {
  key: 'koa.sess',// 默认
  maxAge: 86400000,// 过期时间（需要修改）
  overwrite: true,// 默认，没有效果
  httpOnly: true,
  signed: true,// 默认，签名
  rolling: false,
  renew: true,// （需要修改）
};
app.use(session(CONFIG, app));

router.get('/session', async (ctx) => {
  ctx.session.sid = '我是雷浩'
  ctx.body = '成功写入session'
})

router.get('/session/getsession', async (ctx) => {
  const data = ctx.session.sid
  console.log(data)
  ctx.body = data
})

app.use(router.routes())// 作用：启动路由
  .use(router.allowedMethods())

app.listen(3000)
