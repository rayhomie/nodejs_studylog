const koa = require('koa')

const app = new koa()

const router = require('koa-router')()

const DB = require('./module/db')

router.get('/', async (ctx) => {
  const res = await DB.find('user', {})
  ctx.body = res
})

app.use(router.routes())// 作用：启动路由
  .use(router.allowedMethods())

app.listen(3000)
