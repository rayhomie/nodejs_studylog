const koa = require('koa')

const app = new koa()

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

app.use(async ctx => {// ctx.request.body就可以获取到post传值
  console.log(ctx.request.body)
  ctx.body = ctx.request.body;
})



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

app.use(router.routes())// 作用：启动路由
  .use(router.allowedMethods())

app.listen(3000)
